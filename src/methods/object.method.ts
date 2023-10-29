import { ArrayMethod } from './array.method';
import { NullMethod } from './null.method';
import { isConfig } from '../config';

export function ObjectMethod<T extends object>(target: unknown, strict: boolean = false): target is T {
  strict = 'strict' in (this ?? {}) || strict;
  if (strict) {
    return isConfig.state.toString.call(target) === '[object Object]';
  }
  return typeof target === 'object' && !ArrayMethod(target) && !NullMethod(target);
}
