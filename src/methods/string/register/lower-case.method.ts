import { isConfig } from '../../../config';
import { StringMethod } from '../string.method';

export function LowerCaseMethod(argument: unknown): argument is string {
  if (StringMethod(argument)) {
    return !isConfig.regex.upperCase.test(argument);
  }
  return false;
}
