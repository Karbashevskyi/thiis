import { StringMethod } from '../string.method';
import regexp from '../../../regexp';

export function UpperCaseMethod(target: unknown): target is string {
  if (StringMethod(target)) {
    return !regexp.lowerCase.test(target);
  }
  return false;
}
