import { NumberMethod } from './number.method';
import { BigIntMethod } from './bigInt.method';

export function EvenMethod(target: unknown): target is number {
  if (NumberMethod.apply(this, [target])) {
    return (target as number) % 2 === 0;
  } else if (BigIntMethod.apply(this, [target])) {
    return (target as bigint) % BigInt(2) === BigInt(0);
  }
  return false;
}
