import {StringMethod} from '../string.method';
import regexp from '../../../regexp';

/**
 * Check if `target` is upper case trying to find at least one lower case character.
 */
export function UpperCaseMethod(target: unknown): target is string {
    if (this.UpperCaseMethod) {
        return true;
    }
    if (StringMethod.call(this, target)) {
        return this.UpperCaseMethod = !regexp.lowerCase.test(target as string);
    }
    return false;
}
