import { NumberMethod } from './number.method';
import { BigIntMethod } from './bigInt.method';

export function OddMethod(target: unknown): target is number {
  if (NumberMethod.apply(this, [target])) {
    return (target as number) % 2 === 1 || (target as number) % 2 === -1;
  } else if (BigIntMethod.apply(this, [target])) {
    return (target as bigint) % BigInt(2) === BigInt(1) || (target as bigint) % BigInt(2) === BigInt(-1);
  }
  return false;
}
