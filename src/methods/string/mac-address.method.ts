import { SymbolMethod } from '../symbol.method';
import regexp from '../../regexp';

export function MacAddressMethod(target: string): target is string {
  if (SymbolMethod(target)) {
    return false;
  }
  return regexp.macAddress.test(target);
}
