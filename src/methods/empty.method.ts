import {StringMethod} from './string/string.method';
import {ObjectMethod} from './object.method';
import {ArrayMethod} from './array.method';

export function EmptyMethod<T extends object>(target: unknown): boolean {
    return StringEmptyMethod(target) || ArrayEmptyMethod<T>(target) || ObjectEmptyMethod<T>(target);
}

export function StringEmptyMethod(target: unknown): boolean {
    return StringMethod(target) && StringEmptyMethodExecute(target);
}

export function StringEmptyMethodExecute(target: string): boolean {
    return target.trim()[0] === undefined;
}

export function ArrayEmptyMethod<T extends object>(target: unknown): boolean {
    return ArrayMethod<T>(target) && ArrayEmptyMethodExecute<T>(target);
}

export function ArrayEmptyMethodExecute<T>(target: T[]): boolean {
    return target.length <= 0;
}

export function ObjectEmptyMethod<T extends object>(target: unknown): boolean {
    return ObjectMethod<T>(target) && ObjectEmptyMethodExecute(target);
}

export function ObjectEmptyMethodExecute(target: {}): boolean {
    if ('size' in target) {
        // @ts-ignore
        return target.size <= 0;
    }
    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}
