import { isConfig } from '../../../config';
import { StringMethod } from '../string.method';

export function UpperCaseMethod(target: unknown): target is string {
  if (StringMethod(target)) {
    return !isConfig.regex.lowerCase.test(target);
  }
  return false;
}
