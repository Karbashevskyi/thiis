import {registerInIsDecorator} from './decorators/register-in-is.decorator';
import {AllMethodsInterface, predefinedMethods} from './methods';
import {isConfig} from './config';
import {getDecide} from './engine';

export const RegisterInIs = registerInIsDecorator;
export const IsConfig = isConfig;

export const is: AllMethodsInterface = new Proxy<any>(predefinedMethods, {
    get: (target, name: string, receiver) => {
        if (name in target) {
            return target[name];
        }
        const commands = name.split('_');
        if (commands[0] === 'len') {
            return (targetValue: string) => {
                return predefinedMethods.len(targetValue, commands.slice(1));
            };
        }
        return (...args: any[]) => {
            return getDecide(commands, args);
        };
    },
});
