import { isConfig } from '../../../config';
import { STRING } from '../STRING';

export function LOWER_CASE(target: unknown): target is string {
  if (STRING(target)) {
    return !isConfig.regex.upperCase.test(target);
  }
  return false;
}
