import { isConfig } from '../../../config';
import { STRING } from '../STRING';

export function SNAKE_CASE(target: unknown): target is string {
  if (STRING(target)) {
    return isConfig.regex.snakeCase.test(target);
  }
  return false;
}
