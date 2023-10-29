import {StringMethod} from './string.method';
import regexp from '../../regexp';

export function SpaceMethod(target: string, checkAny: boolean = false): boolean {
    if (StringMethod(target) && target.length > 0) {
        checkAny = ('any' in (this ?? {})) || checkAny;
        if (checkAny) {
            return regexp.anySpace.test(target); // ' ' === true || 'asd ' === true || 'sa d' === true
        }
        return regexp.space.test(target); // ' ' === true
    }
    return false;
}
