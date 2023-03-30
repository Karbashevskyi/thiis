import { InstanceofMethod } from './instanceof.method';

export function ArrayMethod<T>(target: unknown, classRef?: new () => T): target is Array<T> {
  if (target instanceof Array) {
    if (InstanceofMethod(classRef, Function)) {
      if (target.length) {
        return target.every((item: T) => item instanceof (classRef as any));
      } else {
        return false;
      }
    }
    return true;
  }
  return false;
}
