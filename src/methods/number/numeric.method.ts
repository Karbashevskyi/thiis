import { NumberMethod } from './number.method';
import { BigIntMethod } from './bigInt.method';
import { EmptyMethod } from '../empty.method';
import { SymbolMethod } from '../symbol.method';
import regexp from '../../regexp';

export function NumericMethod(target: any): boolean {
  if (SymbolMethod(target)) {
    return false;
  }
  target = '' + target;
  if (EmptyMethod(target)) {
    return false;
  }
  if (NumberMethod(+target)) {
    return true;
  }
  if (regexp.bigint.test(target)) {
    return BigIntMethod(BigInt(target.slice(0, -1)));
  }
  return false;
}
