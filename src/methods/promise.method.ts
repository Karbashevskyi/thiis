import {ObjectMethod} from './object.method';

export function PromiseMethod<T>(target: unknown): target is Promise<T> {
    if (this.PromiseMethod) {
        return true;
    }
    // @ts-ignore
    if (ObjectMethod.call(this, target) && 'then' in target && 'catch' in target) {
        return this.PromiseMethod = typeof target.then === 'function' && typeof target.catch === 'function';
    }
    return false;
}
