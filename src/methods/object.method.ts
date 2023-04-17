export function ObjectMethod<T extends object>(target: unknown): target is T {
    return this.isObject = Object.prototype.toString.call(target) === '[object Object]';
}
