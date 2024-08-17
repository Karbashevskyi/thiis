import { NumberMethod } from './number.method';

export function ZeroMethod(target: unknown): target is 0 {
  return NumberMethod(target) && 0 === target;
}
