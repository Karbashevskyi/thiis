import { SymbolMethod } from '../symbol.method';
import { isConfig } from '../../config';

export function Ipv6Method(target: string): target is string {
  if (SymbolMethod(target)) {
    return false;
  }
  return isConfig.regex.ipv6.test(target);
}
