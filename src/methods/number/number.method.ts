import { InfinityMethod } from './infinity.method';

export function NumberMethod(target: unknown): target is number {
  return 'number' === typeof target && !isNaN(target) && !InfinityMethod(target);
}
