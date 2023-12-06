import {stringDependencies, stringMethods} from './string.method';
import booleanMethods from './boolean.method';
import systemMethods from './system.method';

export const dependencies = {
    ...stringDependencies,
};

export const methods = {
    ...stringMethods,
    ...booleanMethods,
    ...systemMethods,

    zero: `target === 0`,
    null: `target === null`,
    undefined: `target === undefined`,
};

