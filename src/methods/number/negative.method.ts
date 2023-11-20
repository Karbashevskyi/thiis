import { NumberMethod } from './number.method';

export function NegativeMethod(target: unknown): target is number {
  if (this.NegativeMethod) {
    return true;
  }

  // @ts-ignore
  return (this.NegativeMethod = NumberMethod.call(this, target) && target < 0);
}
