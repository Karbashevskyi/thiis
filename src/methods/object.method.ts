import {ArrayMethod} from './array.method';
import {NullMethod} from './null.method';
import {isConfig} from '../config';

export function ObjectMethod<T extends object>(target: unknown): target is T {
    return typeof target === 'object' && !ArrayMethod(target) && !NullMethod(target);
}

export function StrictObjectMethod<T extends object>(target: unknown): target is T {
    return isConfig.state.toString.call(target) === '[object Object]'
}

