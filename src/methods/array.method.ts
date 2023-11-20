export function ArrayMethod<T>(target: unknown, classRef?: new () => T): target is Array<T> {
    if (this.ArrayMethod) {
        return true;
    }
    if (target instanceof Array) {
        if (typeof classRef === 'function') {
            if (target.length) {
                return target.every((item: T) => item instanceof (classRef as any));
            } else {
                return false;
            }
        }
        return this.ArrayMethod = true;
    }
    return false;
}
