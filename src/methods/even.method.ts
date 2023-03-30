import { NumberMethod } from './number/number.method';
import { BigIntMethod } from './number/bigInt.method';

export function EvenMethod(target: unknown): target is number {
  if (NumberMethod(target)) {
    return target % 2 === 0;
  } else if (BigIntMethod(target)) {
    return target % BigInt(2) === BigInt(0);
  }
  return false;
}
