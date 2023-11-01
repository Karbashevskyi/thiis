import { StringMethod } from '../string.method';
import regexp from '../../../regexp';

export function CamelCaseMethod(target: unknown): target is string {
  if (StringMethod(target)) {
    return regexp.camelCase.test(target);
  }
  return false;
}
