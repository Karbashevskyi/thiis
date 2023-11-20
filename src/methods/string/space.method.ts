import {StringMethod} from './string.method';
import regexp from '../../regexp';

export function SpaceMethod(target: string): boolean {
    if (this.SpaceMethod) {
        return true;
    }
    if (StringMethod.call(this, target) && target.length > 0) {
        return this.SpaceMethod = regexp.anySpace.test(target); // ' ' === true || 'asd ' === true || 'sa d' === true
    }
    return false;
}

export function OnlySpaceMethod(target: string): boolean {
    if (this.OnlySpaceMethod) {
        return true;
    }
    if (StringMethod.call(this, target) && target.length > 0) {
        return this.OnlySpaceMethod = regexp.space.test(target); // ' ' === true
    }
    return false;
}
