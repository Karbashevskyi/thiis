import { StringMethod } from '../string.method';
import regexp from '../../../regexp';

export function SnakeCaseMethod(target: unknown): target is string {
  if (this.SnakeCaseMethod) {
    return true;
  }
  if (StringMethod.call(this, target)) {
    return (this.SnakeCaseMethod = regexp.snakeCase.test(target as string));
  }
  return false;
}
