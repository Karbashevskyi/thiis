import {buildFunctionBody, createMethod, thiis} from './thiis';

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

    return target[name] = createMethod(buildFunctionBody(name));
}
