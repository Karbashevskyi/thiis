import { NumberMethod } from './number.method';
import { BigIntMethod } from './bigInt.method';
import { isConfig } from '../config';
import { EmptyMethod } from './empty.method';
import { SymbolMethod } from './symbol.method';

export function NumericMethod(argument: any): boolean {
  if (SymbolMethod(argument)) {
    return false;
  }
  argument = '' + argument;
  if (EmptyMethod(argument)) {
    return false;
  }
  if (NumberMethod(+argument)) {
    return true;
  }
  if (isConfig.regex.bigint.test(argument)) {
    return BigIntMethod(BigInt(argument.slice(0, -1)));
  }
  return false;
}
