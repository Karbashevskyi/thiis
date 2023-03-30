import { StringMethod } from './string/string.method';
import { ObjectMethod } from './object.method';
import { ArrayMethod } from './array.method';

export function EmptyMethod<T extends object>(target: unknown): boolean {
  if (StringMethod(target)) {
    return target.trim()[0] === undefined;
  }

  if (ObjectMethod<T>(target) || ArrayMethod<T>(target)) {
    if (Reflect.has(target, 'size')) {
      // @ts-ignore
      return target.size <= 0;
    }
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
  return false;
}
