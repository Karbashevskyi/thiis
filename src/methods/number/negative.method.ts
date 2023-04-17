import { NumberMethod } from './number.method';

export function NegativeMethod(target: unknown): target is number {
  return NumberMethod.apply(this, [target]) && (target as number) < 0;
}
