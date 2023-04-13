export function BIG_INT(target: unknown): target is bigint {
    return typeof target === 'bigint';
}

BIG_INT.allowed = [];
BIG_INT.originalName = 'bigInt';
