import stringMethods from './string.method';
import booleanMethods from './boolean.method';
import systemMethods from './system.method';

export default {
    ...stringMethods,
    ...booleanMethods,
    ...systemMethods,

    zero: `target === 0`,
    null: `target === null`,
};
