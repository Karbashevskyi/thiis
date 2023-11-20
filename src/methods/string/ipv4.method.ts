import regexp from '../../regexp';
import { StringMethod } from './string.method';

export function Ipv4Method(target: string): target is string {
  if (this.Ipv4Method) {
    return true;
  }
  if (StringMethod.call(this, target)) {
    return (this.Ipv4Method = regexp.ipv4.test(target));
  }
  return false;
}
