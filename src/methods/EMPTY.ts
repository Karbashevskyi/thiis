import {is} from '../index';

function emptyObject(target) {
    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

function emptyArray(target) {
    return target.length === 0;
}

function emptyString(target) {
    return target[0] === undefined;
}

export function EMPTY<T extends object>(target: unknown): boolean {
    // TODO add Set, Map etc.

    if (this?.forObject) {
        return emptyObject(target);
    }

    if (this?.forArray) {
        return emptyArray(target);
    }

    if (this?.forString) {
        return emptyString(target);
    }

    if (is.object<T>(target)) {
        return emptyObject(target);
    }

    if (is.array<T>(target)) {
        return emptyArray(target);
    }

    if (is.string(target)) {
        return emptyString(target);
    }

    return false;

}

EMPTY.allowed = [];
EMPTY.originalName = 'empty';
