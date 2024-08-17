import { NumberMethod } from './number.method';
import { BigIntMethod } from './bigInt.method';

export function OddMethod(target: unknown): target is number {
  let result = false;
  if (NumberMethod(target)) {
    target = target % 2;
    result = 1 === target || -1 === target;
  } else if (BigIntMethod(target)) {
    target = target % BigInt(2);
    result = BigInt(1) === target || BigInt(-1) === target;
  }
  return result;
}
