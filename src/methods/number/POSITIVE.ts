import { NUMBER } from './NUMBER';

export function POSITIVE(target: unknown): target is number {
  return NUMBER(target) && target > 0;
}
