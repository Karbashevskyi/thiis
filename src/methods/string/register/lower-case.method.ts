import { StringMethod } from '../string.method';
import regexp from '../../../regexp';

export function LowerCaseMethod(target: unknown): target is string {
  if (StringMethod(target)) {
    return !regexp.upperCase.test(target);
  }
  return false;
}
