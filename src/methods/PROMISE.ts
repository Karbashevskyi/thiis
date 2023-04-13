import {OBJECT} from './OBJECT';
import {INSTANCEOF} from './INSTANCEOF';

export function PROMISE<T>(target: unknown): target is Promise<T> {
    if (OBJECT(target) && Reflect.has(target, 'then') && Reflect.has(target, 'catch')) {
        return INSTANCEOF((target as any)?.then, Function) && INSTANCEOF((target as any)?.catch, Function);
    }
    return false;
}

PROMISE.allowed = [];
PROMISE.originalName = 'promise';
