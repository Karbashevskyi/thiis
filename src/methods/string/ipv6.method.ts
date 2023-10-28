import { SymbolMethod } from '../symbol.method';
import regexp from '../../regexp';

export function Ipv6Method(target: string): target is string {
  if (SymbolMethod(target)) {
    return false;
  }
  return regexp.ipv6.test(target);
}
