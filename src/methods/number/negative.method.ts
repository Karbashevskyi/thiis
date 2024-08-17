import { NumberMethod } from './number.method';

export function NegativeMethod(target: unknown): target is number {
  return NumberMethod(target) && 0 > target;
}
