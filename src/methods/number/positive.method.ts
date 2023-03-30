import { NumberMethod } from './number.method';

export function PositiveMethod(target: unknown): target is number {
  return NumberMethod(target) && target > 0;
}
