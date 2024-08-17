import { NumberMethod } from './number.method';
import { BigIntMethod } from './bigInt.method';

export function EvenMethod(target: unknown): target is number {
  let result = false;
  if (NumberMethod(target)) {
    result = target % 2 === 0;
  } else if (BigIntMethod(target)) {
    result = target % BigInt(2) === BigInt(0);
  }
  return result;
}
