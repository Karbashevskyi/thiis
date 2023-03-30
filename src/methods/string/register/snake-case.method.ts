import { isConfig } from '../../../config';
import { StringMethod } from '../string.method';

export function SnakeCaseMethod(target: unknown): target is string {
  if (StringMethod(target)) {
    return isConfig.regex.snakeCase.test(target);
  }
  return false;
}
