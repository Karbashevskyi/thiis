import { SYMBOL } from '../SYMBOL';
import { isConfig } from '../../config';

export function MAC_ADDRESS(target: string): target is string {
  if (SYMBOL(target)) {
    return false;
  }
  return isConfig.regex.macAddress.test(target);
}
