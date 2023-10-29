import {StringMethod} from '../string.method';
import regexp from '../../../regexp';

/**
 * Check if `target` is upper case trying to find at least one lower case character.
 */
export function UpperCaseMethod(target: unknown): target is string {
    if (StringMethod(target)) {
        return !regexp.lowerCase.test(target);
    }
    return false;
}
