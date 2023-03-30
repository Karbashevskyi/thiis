import { StringMethod } from './string.method';
import { isConfig } from '../../config';

export function WordMethod(target: string): target is string {
  if (StringMethod(target)) {
    return isConfig.regex.word.test(target);
  }
  return false;
}
