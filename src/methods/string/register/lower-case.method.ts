import {StringMethod} from '../string.method';
import regexp from '../../../regexp';

/**
 * Check if `target` is upper case trying to find at least one upper case character.
 */
export function LowerCaseMethod(target: unknown): target is string {
    if (StringMethod(target)) {
        return !regexp.upperCase.test(target);
    }
    return false;
}
