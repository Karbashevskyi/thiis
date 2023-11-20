export function BigIntMethod(target: unknown): target is bigint {
    if (this.BigIntMethod) {
        return true;
    }
    return this.BigIntMethod = typeof target === 'bigint';
}
