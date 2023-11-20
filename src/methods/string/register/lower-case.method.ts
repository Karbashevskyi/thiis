import { StringMethod } from '../string.method';
import regexp from '../../../regexp';

/**
 * Check if `target` is upper case trying to find at least one upper case character.
 */
export function LowerCaseMethod(target: unknown): target is string {
  if (this.LowerCaseMethod) {
    return true;
  }
  if (StringMethod.call(this, target)) {
    return (this.LowerCaseMethod = !regexp.upperCase.test(target as string));
  }
  return false;
}
