import {ArrayMethod} from './array.method';
import {NullMethod} from './null.method';
import {isConfig} from '../config';

export function ObjectMethod<T extends object>(target: unknown): target is T {
  return 'object' === typeof target && !ArrayMethod(target) && !NullMethod(target);
}

export function StrictObjectMethod<T extends object>(target: unknown): target is T {
  return '[object Object]' === isConfig.state.toString.call(target);
}
