import { isConfig } from '../../../config';
import { StringMethod } from '../string.method';

export function CamelCaseMethod(target: unknown): target is string {
  if (StringMethod.apply(this, [target])) {
    return isConfig.regex.camelCase.test(target as string);
  }
  return false;
}
