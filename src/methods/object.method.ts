import { ArrayMethod } from './array.method';
import { NullMethod } from './null.method';
import { isConfig } from '../config';

export function ObjectMethod<T extends object>(target: unknown, checkAny: boolean = false): target is T {
  checkAny = 'any' in (this ?? {}) || checkAny;
  if (checkAny) {
    return typeof target === 'object' && !ArrayMethod(target) && !NullMethod(target);
  }
  return isConfig.state.toString.call(target) === '[object Object]';
}
