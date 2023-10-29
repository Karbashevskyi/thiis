import regexp from '../../regexp';
import { StringMethod } from './string.method';

export function Ipv4Method(target: string): target is string {
  if (StringMethod(target)) {
    return regexp.ipv4.test(target);
  }
  return false;
}
