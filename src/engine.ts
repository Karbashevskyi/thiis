import {CommandType} from './types/commands.type';
import methods from './methods';
import {createMethod, default as thiis} from './thiis';
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

export function getMethod(commandName: string): string {
    // TODO: InstanceofMethod.bind({classRef: findInGlobalContext(commandName)}) into string
    return `(${methods[commandName]})`;
}

export function proxyGet(target: typeof thiis, name: string) {
    return target[name] || notFoundMethodCase(target, name);
}

function notFoundMethodCase(target: typeof thiis, name: string) {
    // if (name[0] === 'l' && name[1] === 'e' && name[2] === 'n') {
    //     // first 3 letters is "len"
    //     return (targetValue: string) => {
    //         // TODO push to predefinedMethods
    //         return target.len(targetValue, name.split('_').slice(1));
    //     };
    // }

    const methodNames = name.split('_');

    return (target[name] = (() => {

        // is.empty() <-
        // (object, count of properties),
        // (array, length),
        // (string, length),
        // (Map, size),
        // (Set, size),
        // (WeakMap, size),
        // (WeakSet, size),
        // (TypedArray, length),
        // (ArrayBuffer, byteLength),
        // (DataView, byteLength)

        // is.array_empty() <-
        // (array, length),

        // is.string_empty() <-
        // (string, length),

        // is.object_empty() <-
        // (object, count of properties),

        // is.map_empty() <-
        // (Map, size),

        // is.set_empty() <-
        // (Set, size),

        const functionBody = methodNames.reduce(
            (acc, methodName, currentIndex) => {
                if (methodName === 'not') {
                    return `${acc}!`;
                }
                if (methodName === 'or') {
                    return `(${acc})||`;
                }
                if (currentIndex === 0) {
                    return methods[methodName];
                }
                if (acc[acc.length - 1] === '|') {
                    return `${acc} ${methods[methodName]}`;
                }
                if (acc.length < 2) {
                    return acc + getMethod(methodName);
                }
                if (acc[acc.length - 1] === '!') {
                    return `(${acc.slice(0, acc.length - 1)}) && !${methods[methodName]}`;
                }
                return `(${acc}) && ${getMethod(methodName)}`;
            },
            ''
        );

        const method = createMethod(functionBody);
        return method;
    })());
}
