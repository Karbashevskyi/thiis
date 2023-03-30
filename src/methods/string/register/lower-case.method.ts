import { isConfig } from '../../../config';
import { StringMethod } from '../string.method';

export function LowerCaseMethod(target: unknown): target is string {
  if (StringMethod(target)) {
    return !isConfig.regex.upperCase.test(target);
  }
  return false;
}
