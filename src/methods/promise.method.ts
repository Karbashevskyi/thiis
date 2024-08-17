import { ObjectMethod } from './object.method';

export function PromiseMethod<T>(target: unknown): target is Promise<T> {
  if (ObjectMethod(target) && 'then' in target && 'catch' in target) {
    return 'function' === typeof target.then && 'function' === typeof target.catch;
  }
  return false;
}
