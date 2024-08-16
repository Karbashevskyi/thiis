import {InstanceofMethod} from './methods/instanceof.method';
import {CommandType} from './types/commands.type';
import {predefinedMethods} from './methods';
import {isConfig} from './config';

type CommandByLogicType = {
    every: CommandType[];
    some: CommandType[];
    everyBad: CommandType[];
};

/**
 * @description 'is' is a proxy object that allows you to call methods from you global context
 */
export default class Handler {

    /**
     * @description This method is called when the object is called as a function
     * @param target
     * @param name
     */
    public static get(target: typeof predefinedMethods, name: string) {
        return target[name] || this.notFoundMethodCase(target, name);
    }

    /**
     * @description This method is called when the object is called as a function
     * @param command
     * @private
     */
    private static findInGlobalContext(command: string): CommandType {
        if (isConfig.useGlobalContext) {
            return (
                isConfig.globalContext[command] || (() => false)
            );
        }
        return () => false;
    }

    /**
     * @description This method is called when the object is called as a function
     * @param commandName
     * @private
     */
    private static getMethod(commandName: string): CommandType {
        return predefinedMethods[commandName] || InstanceofMethod.bind({classRef: this.findInGlobalContext(commandName)});
    }

    /**
     * @description This method is called when the object is called as a function
     * @param target
     * @param name
     * @private
     */
    private static notFoundMethodCase(target: typeof predefinedMethods, name: string) {

        const methodsName = name.split('_');

        if (methodsName[0] === 'len') {
            // first 3 letters is "len"
            return (targetValue: string) => {
                // TODO push to predefinedMethods
                return target.len(targetValue, methodsName.slice(1));
            };
        }

        return (target[name] = this.buildNewFunction(methodsName));
    }

    /**
     * @description This method is called when the object is called as a function
     * @param methodsName
     * @private
     */
    private static buildNewFunction(methodsName: string[]): CommandType {

        let underOr = false;
        let underNot = false;
        const every: CommandByLogicType['every'] = [];
        const some: CommandByLogicType['some'] = [];
        const everyBad: CommandByLogicType['everyBad'] = [];

        for (let index = 0; index < methodsName.length; index++) {

            const commandName = methodsName[index];

            // if next command is 'or' we need to set underOr to true to know that we need to push to some array
            if (methodsName[index + 1] === 'or') {
                underOr = true;
                index++;
            }

            if (commandName === 'not') {
                underNot = true;
                continue;
            }

            if (underNot) {
                everyBad.push(this.getMethod(commandName));
            } else if (underOr) {
                some.push(this.getMethod(commandName));
            } else {
                every.push(this.getMethod(commandName));
            }

        }

        return (...args: unknown[]) => {
            if (every.length) {
                if (!every.every((command) => command(...args))) {
                    return false;
                }
            }
            if (some.length) {
                if (!some.some((command) => command(...args))) {
                    return false;
                }
            }
            // Empty array return false
            return !everyBad.some((command) => command(...args));
        };

    }

}
