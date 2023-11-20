/**
 *
 * @method instanceof
 * @param target object
 * @param classRef link to model
 */
export function InstanceofMethod<T>(target: unknown, classRef?: new (...args: any) => T): target is T {
    if (this.InstanceofMethod) {
        return true;
    }
    if ('classRef' in (this ?? {})) {
        classRef = this.classRef;
    }
    if (classRef instanceof Function) {
        return this.InstanceofMethod = target instanceof classRef;
    }
    return false;
}
