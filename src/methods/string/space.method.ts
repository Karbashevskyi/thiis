import { StringMethod } from './string.method';
import regexp from '../../regexp';

export function SpaceMethod(target: string, strict: boolean = false): boolean {
  if (StringMethod(target) && target.length > 0) {
    strict = 'strict' in (this ?? {}) || strict;
    if (strict) {
      return regexp.space.test(target); // ' ' === true
    }
    return regexp.anySpace.test(target); // ' ' === true || 'asd ' === true || 'sa d' === true
  }
  return false;
}
