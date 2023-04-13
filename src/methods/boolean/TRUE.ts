import {is} from '../../index';

export function TRUE(target: unknown): target is true {
    return target === true;
}


TRUE.allowed = [];
TRUE.originalName = 'true';
