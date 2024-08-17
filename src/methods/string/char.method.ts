import { StringMethod } from './string.method';

export function CharMethod(target: unknown): target is string {
  return StringMethod(target) && 1 === target.length;
}
