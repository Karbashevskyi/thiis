import { isConfig } from '../../../config';
import { StringMethod } from '../string.method';

export function KebabCaseMethod(target: unknown): target is string {
  if (StringMethod(target)) {
    return isConfig.regex.kebabCase.test(target);
  }
  return false;
}
