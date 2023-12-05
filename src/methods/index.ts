import {stringMethods, stringDepencies} from './string.method';
import booleanMethods from './boolean.method';
import systemMethods from './system.method';

export const depencies = {
    ...stringDepencies,
};

export const methods = {
    ...stringMethods,
    ...booleanMethods,
    ...systemMethods,

    zero: `target === 0`,
    null: `target === null`,
    undefined: `target === undefined`,
};


export const dependecyToMethod = (methodNames: string | undefined): string => {
    if (!methodNames) {
        return '';
    }
    return methodNames.split(',').reduce((acc, method) => {
        return acc + methods[method] + ' && ';
    }, '');
};