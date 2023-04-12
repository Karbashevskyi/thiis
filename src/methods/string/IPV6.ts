import { SYMBOL } from '../SYMBOL';
import { isConfig } from '../../config';

export function IPV6(target: string): target is string {
  if (SYMBOL(target)) {
    return false;
  }
  return isConfig.regex.ipv6.test(target);
}
