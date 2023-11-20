import regexp from '../../regexp';
import { StringMethod } from './string.method';

export function Ipv6Method(target: string): target is string {
  if (this.Ipv6Method) {
    return true;
  }
  if (StringMethod.call(this, target)) {
    return (this.Ipv6Method = regexp.ipv6.test(target));
  }
  return false;
}
