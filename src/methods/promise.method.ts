import { ObjectMethod } from './object.method';
import { InstanceofMethod } from './instanceof.method';

export function PromiseMethod<T>(target: unknown): target is Promise<T> {
  if (ObjectMethod(target) && Reflect.has(target, 'then') && Reflect.has(target, 'catch')) {
    return InstanceofMethod((target as any)?.then, Function) && InstanceofMethod((target as any)?.catch, Function);
  }
  return false;
}
