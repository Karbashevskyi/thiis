import { ObjectMethod } from './object.method';
import { InstanceofMethod } from './instanceof.method';

export function PromiseMethod<T>(target: unknown): target is Promise<T> {
  if (ObjectMethod.apply(this, [target]) && 'then' in (target as {}) && 'catch' in (target as {})) {
    return InstanceofMethod.apply(this, [(target as any)?.then, Function]) && InstanceofMethod.apply(this, [(target as any)?.catch, Function]);
  }
  return false;
}
