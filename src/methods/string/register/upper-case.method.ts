import { isConfig } from '../../../config';
import { StringMethod } from '../string.method';

export function UpperCaseMethod(target: unknown): target is string {
  if (StringMethod.apply(this, [target])) {
    return !isConfig.regex.lowerCase.test(target as string);
  }
  return false;
}
