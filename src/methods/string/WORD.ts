import { STRING } from './STRING';
import { isConfig } from '../../config';

export function WORD(target: string): target is string {
  if (STRING(target)) {
    return isConfig.regex.word.test(target);
  }
  return false;
}
