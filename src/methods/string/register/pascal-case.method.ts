import { isConfig } from '../../../config';
import { StringMethod } from '../string.method';

export function PascalCaseMethod(target: unknown): target is string {
  if (StringMethod.apply(this, [target])) {
    return isConfig.regex.pascalCase.test(target as string);
  }
  return false;
}
