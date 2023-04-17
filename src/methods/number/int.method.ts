import { NumberMethod } from './number.method';

export function IntMethod(target: unknown): target is number {
  return NumberMethod.apply(this, [target]) && Math.floor((target as number)) === target;
}
