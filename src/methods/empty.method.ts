import { StringMethod } from './string/string.method';
import { ObjectMethod } from './object.method';
import { ArrayMethod } from './array.method';

export function EmptyMethod<T extends object>(target: unknown): boolean {
  // TODO find way to if prev method was ObjectMethod: is.object_not_empty
  if (ObjectMethod<T>(target) || ArrayMethod<T>(target)) {
    if ('size' in target) {
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
  if (StringMethod(target)) {
    return target.trim()[0] === undefined;
  }
  return false;
}
