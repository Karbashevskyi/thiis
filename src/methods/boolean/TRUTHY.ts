import {is} from '../../index';

export function TRUTHY(target: unknown): target is true {
    return !!target;
}

TRUTHY.allowed = [];
TRUTHY.originalName = 'truthy';
