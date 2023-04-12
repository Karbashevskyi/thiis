import { isConfig } from '../../../config';
import { STRING } from '../STRING';

export function UPPER_CASE(target: unknown): target is string {
  if (STRING(target)) {
    return !isConfig.regex.lowerCase.test(target);
  }
  return false;
}
