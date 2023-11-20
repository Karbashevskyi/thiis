import {ArrayMethod} from './array.method';
import {NullMethod} from './null.method';
import {isConfig} from '../config';

export function ObjectMethod<T extends object>(target: unknown): target is T {
    if (this.ObjectMethod) {
        return true;
    }
    return this.ObjectMethod = typeof target === 'object' && !ArrayMethod.call(this, target) && !NullMethod.call(this, target);
}

export function StrictObjectMethod<T extends object>(target: unknown): target is T {
    if (this.StrictObjectMethod) {
        return true;
    }
    return this.StrictObjectMethod = isConfig.state.toString.call(target) === '[object Object]';
}

