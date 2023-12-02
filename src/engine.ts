import {InstanceofMethod} from './methods/instanceof.method';
import {CommandType} from './types/commands.type';
import thiis from './methods';
import {isConfig} from './config';

function findInGlobalContext(command: string): CommandType {
    if (isConfig.useGlobalContext) {
        return (
            isConfig.globalContext[command] ||
            (() => {
                return false;
            })
        );
    }
    return () => {
        return false;
    };
}

export function getMethod(commandName: string): CommandType {
    return thiis[commandName] || InstanceofMethod.bind({classRef: findInGlobalContext(commandName)});
}

export function proxyGet(target: typeof thiis, name: string) {
    return target[name] || notFoundMethodCase(target, name);
}

type CommandByLogicType = {
    every: CommandType[];
    some: CommandType[];
    everyBad: CommandType[];
    underOr: boolean;
};

function notFoundMethodCase(target: typeof thiis, name: string) {
    // if (name[0] === 'l' && name[1] === 'e' && name[2] === 'n') {
    //     // first 3 letters is "len"
    //     return (targetValue: string) => {
    //         // TODO push to predefinedMethods
    //         return target.len(targetValue, name.split('_').slice(1));
    //     };
    // }

    const methodsName = name.split('_');
    const indexOfNot = methodsName.indexOf('not');
    const [commandNamesStr, commandNamesUnderNot] =
        indexOfNot > -1 ? [methodsName.slice(0, indexOfNot), methodsName.slice(indexOfNot)] : [methodsName, []];

    return (target[name] = ((commandByLogic: CommandByLogicType = {
        every: [],
        some: [],
        everyBad: [],
        underOr: false,
    }) => {

        if (commandNamesStr) {
            commandNamesStr.forEach((commandName, index, array) => {
                if (array[index + 1] === 'or') {
                    commandByLogic.underOr = true;
                }
                if (commandName !== 'or') {
                    if (commandByLogic.underOr) {
                        commandByLogic.some.push(getMethod(commandName));
                    } else {
                        commandByLogic.every.push(getMethod(commandName));
                    }
                }
            });

            if (commandNamesUnderNot) {
                const methodsUnderNot = commandNamesUnderNot.filter((method) => method !== 'not' && method !== 'or');
                commandByLogic.everyBad = methodsUnderNot.map(getMethod);
            }

            return (...args: unknown[]) => {
                if (commandByLogic.every.length) {
                    if (!commandByLogic.every.every((command) => command(...args))) {
                        return false;
                    }
                }
                if (commandByLogic.some.length) {
                    if (!commandByLogic.some.some((command) => command(...args))) {
                        return false;
                    }
                }
                // Empty array return false
                return !commandByLogic.everyBad.some((command) => command(...args));
            };
        }

        // Case: is.not_[comment]

        const methodsUnderNot = commandNamesUnderNot.filter((method) => method !== 'not' && method !== 'or');
        commandByLogic.everyBad = methodsUnderNot.map(getMethod);

        return (...args: unknown[]) => {
            return !commandByLogic.everyBad.some((command) => command(...args));
        };
    })());
}
