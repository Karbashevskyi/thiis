import { InfinityMethod } from './infinity.method';

export function NumberMethod(target: unknown): target is number {
  return typeof target === 'number' && !isNaN(target) && !InfinityMethod(target);
}
