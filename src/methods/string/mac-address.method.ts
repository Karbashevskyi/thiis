import regexp from '../../regexp';
import { StringMethod } from './string.method';

export function MacAddressMethod(target: string): target is string {
  if (StringMethod(target)) {
    return regexp.macAddress.test(target);
  }
  return false;
}
