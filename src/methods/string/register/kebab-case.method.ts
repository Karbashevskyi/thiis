import { isConfig } from '../../../config';
import { StringMethod } from '../string.method';

export function KebabCaseMethod(target: unknown): target is string {
  if (StringMethod.apply(this, [target])) {
    return isConfig.regex.kebabCase.test(target as string);
  }
  return false;
}
