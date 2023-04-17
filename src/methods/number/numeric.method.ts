import { NumberMethod } from './number.method';
import { BigIntMethod } from './bigInt.method';
import { isConfig } from '../../config';
import { EmptyMethod } from '../empty.method';
import { SymbolMethod } from '../symbol.method';

export function NumericMethod(target: any): boolean {
  if (SymbolMethod.apply(this, [target])) {
    return false;
  }
  target = '' + target;
  if (EmptyMethod.apply(this, [target])) {
    return false;
  }
  if (NumberMethod.apply(this, [+target])) {
    return true;
  }
  if (isConfig.regex.bigint.test(target)) {
    return BigIntMethod.apply(this, [BigInt(target.slice(0, -1))]);
  }
  return false;
}
