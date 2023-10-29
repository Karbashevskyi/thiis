import {ArrayMethod} from './array.method';
import {NullMethod} from './null.method';

export function ObjectMethod<T extends object>(target: unknown, checkAny: boolean = false): target is T {
  return typeof target === 'object' && !ArrayMethod(target) && !NullMethod(target);
}
