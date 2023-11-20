import { NumberMethod } from './number.method';

export function IntMethod(target: unknown): target is number {
  if (this.IntMethod) {
    return true;
  }
  return (this.IntMethod = NumberMethod.call(this, target) && Math.floor(<number>target) === target);
}
