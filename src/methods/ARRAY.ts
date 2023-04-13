import {INSTANCEOF} from './INSTANCEOF';

export function ARRAY<T>(target: unknown, classRef?: new () => T): target is Array<T> {
    if (target instanceof Array) {
        if (INSTANCEOF(classRef, Function)) {
            if (target.length) {
                return target.every((item: T) => item instanceof (classRef as any));
            } else {
                return false;
            }
        }
        return true;
    }
    return false;
}

ARRAY.allowed = [];
ARRAY.originalName = 'array';
