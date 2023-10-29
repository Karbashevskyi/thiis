import {StringMethod} from './string.method';
import regexp from '../../regexp';

export function SpaceMethod(target: string): boolean {
    if (StringMethod(target) && target.length > 0) {
        return regexp.anySpace.test(target); // ' ' === true || 'asd ' === true || 'sa d' === true
    }
    return false;
}

export function OnlySpaceMethod(target: string): boolean {
    if (StringMethod(target) && target.length > 0) {
        return regexp.space.test(target); // ' ' === true
    }
    return false;
}
