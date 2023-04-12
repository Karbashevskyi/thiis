import { NUMBER } from './NUMBER';

export function NEGATIVE(target: unknown): target is number {
  return NUMBER(target) && target < 0;
}
