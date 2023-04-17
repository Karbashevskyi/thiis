import { StringMethod } from './string.method';

export function CharMethod(target: unknown): target is string {
  return StringMethod.apply(this, [target]) && (target as string).length === 1;
}
