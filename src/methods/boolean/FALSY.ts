import {is} from '../../index';

export function FALSY(target: unknown): target is false {
    return !target;
}

FALSY.allowed = [];
FALSY.originalName = 'falsy';
