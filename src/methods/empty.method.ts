import {StringMethod} from './string/string.method';
import {ObjectMethod} from './object.method';
import {ArrayMethod} from './array.method';

function ObjectIsEmpty(target: {}): boolean {
    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

function ArrayIsEmpty(target: []): boolean {
    return target?.length === 0;
}

function StringIsEmpty(target: string): boolean {
    return target.trim()[0] === undefined;
}

export function EmptyMethod<T extends object>(target: unknown): boolean {

    if (this?.isObject || ObjectMethod.apply(this, [target])) {
        return this.isEmpty = ObjectIsEmpty(target as {});
    }

    if (this?.isArray || ArrayMethod.apply(this, [target])) {
        return this.isEmpty = ArrayIsEmpty(target as []);
    }

    if (this?.isString || StringMethod.apply(this, [target])) {
        return this.isEmpty = StringIsEmpty(target as string);
    }

    // @ts-ignore
    if (target?.size !== undefined) {
        // @ts-ignore
        return target.size <= 0;
    }

    return false;
}
