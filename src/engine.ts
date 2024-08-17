import {InstanceofMethod} from './methods/instanceof.method';
import {CommandType} from './types/commands.type';
import {predefinedMethods} from './methods';
import {isConfig} from './config';

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
        return (isConfig.useGlobalContext && (isConfig.globalContext[command])) || (() => false);
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
            return (target[name] = (targetValue: string) => {
                return target.len(targetValue, methodsName.slice(1));
            });
        }

        return (target[name] = this.buildNewFunction(methodsName));
    }

    /**
     * @description This method is called when the object is called as a function
     * @param methodsName - array of methods name and there aren't situations when we have less than 2 elements
     * @private
     */
    private static buildNewFunction(methodsName: string[]): CommandType {

        let underOr = false;
        let underNot = false;

        return methodsName.reduce((chainMethod, commandName, index) => {

            if (!underOr) {
                underOr = methodsName[index + 1] === 'or';
            }

            if (commandName === 'not') {
                underNot = true;
                return chainMethod;
            }

            if (commandName === 'or') {
                return chainMethod;
            }

            const method = this.getMethod(commandName);

            if (!index) {
                return method;
            }

            return this.buildChainMethod(chainMethod, method, underOr, underNot);
        }, () => true);
    }

    /**
     * @description This method is called when the object is called as a function
     * @param prev
     * @param next
     * @param underOr
     * @param underNot
     * @private
     */
    private static buildChainMethod(
        prev: CommandType,
        next: CommandType,
        underOr: boolean = false,
        underNot: boolean = false
    ): CommandType {

        if (underNot) {
            return (...args: unknown[]) => prev(...args) ? !next(...args) : false;
        }

        if (underOr) {
            return (...args: unknown[]) => prev(...args) || next(...args);
        }

        return (...args: unknown[]) => prev(...args) ? next(...args) : false;


    }

}
