import { isConfig } from '../../../config';
import { STRING } from '../STRING';

export function CAMEL_CASE(target: unknown): target is string {
  if (STRING(target)) {
    return isConfig.regex.camelCase.test(target);
  }
  return false;
}
