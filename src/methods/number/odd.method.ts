import { NumberMethod } from './number.method';
import { BigIntMethod } from './bigInt.method';

export function OddMethod(target: unknown): target is number {
  if (NumberMethod(target)) {
    return target % 2 === 1 || target % 2 === -1;
  } else if (BigIntMethod(target)) {
    return target % BigInt(2) === BigInt(1) || target % BigInt(2) === BigInt(-1);
  }
  return false;
}
