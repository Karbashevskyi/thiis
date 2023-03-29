import { NumberMethod } from './number/number.method';
import { BigIntMethod } from './number/bigInt.method';

export function EvenMethod(argument: unknown): argument is number {
  if (NumberMethod(argument)) {
    return argument % 2 === 0;
  } else if (BigIntMethod(argument)) {
    return argument % BigInt(2) === BigInt(0);
  }
  return false;
}
