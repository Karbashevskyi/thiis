import {InfinityMethod} from './infinity.method';

export function NumberMethod(target: unknown): target is number {
    return typeof target === 'number' && !isNaN(target) && !InfinityMethod(target);
}

export default {
    BigIntFunctionBody: `typeof target === 'bigint'`,
    InfinityFunctionBody: `target === Infinity || target === -Infinity`,
    NegativeFunctionBody: `target < 0`,
    PositiveFunctionBody: `target > 0`,
    ZeroFunctionBody: `target === 0`,
};
