import { SymbolMethod } from '../symbol.method';
import { isConfig } from '../../config';

export function MacAddressMethod(target: string): target is string {
  if (SymbolMethod(target)) {
    return false;
  }
  return isConfig.regex.macAddress.test(target);
}
