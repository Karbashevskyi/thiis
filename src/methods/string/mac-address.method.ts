import regexp from '../../regexp';
import { StringMethod } from './string.method';

export function MacAddressMethod(target: string): target is string {
  if (this.MacAddressMethod) {
    return true;
  }
  if (StringMethod.call(this, target)) {
    return (this.MacAddressMethod = regexp.macAddress.test(target));
  }
  return false;
}
