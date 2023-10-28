import { StringMethod } from './string.method';
import regexp from '../../regexp';

export function WordMethod(target: string): target is string {
  if (StringMethod(target)) {
    return regexp.word.test(target);
  }
  return false;
}
