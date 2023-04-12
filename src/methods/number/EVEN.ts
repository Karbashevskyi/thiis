import { NUMBER } from './NUMBER';
import { BIG_INT } from './BIG_INT';

export function EVEN(target: unknown): target is number {
  if (NUMBER(target)) {
    return target % 2 === 0;
  } else if (BIG_INT(target)) {
    return target % BigInt(2) === BigInt(0);
  }
  return false;
}
