import { StringMethod } from '../string.method';
import regexp from '../../../regexp';

export function CamelCaseMethod(target: unknown): target is string {
  if (this.CamelCaseMethod) {
    return true;
  }
  if (StringMethod.call(this, target)) {
    return (this.CamelCaseMethod = regexp.camelCase.test(target as string));
  }
  return false;
}
