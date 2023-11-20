import { StringMethod } from './string.method';

export function CharMethod(target: unknown): target is string {
  if (this.CharMethod) {
    return true;
  }
  // @ts-ignore
  return (this.CharMethod = StringMethod.call(this, target) && target.length === 1);
}
