import { STRING } from './string/STRING';
import { OBJECT } from './OBJECT';
import { ARRAY } from './ARRAY';

export function EMPTY<T extends object>(target: unknown): boolean {

  if (OBJECT<T>(target) || ARRAY<T>(target)) {
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

  if (STRING(target)) {
    return target.trim()[0] === undefined;
  }

  return false;
}
