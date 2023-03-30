import { isConfig } from '../../../config';
import { StringMethod } from '../string.method';

export function PascalCaseMethod(target: unknown): target is string {
  if (StringMethod(target)) {
    return isConfig.regex.pascalCase.test(target);
  }
  return false;
}
