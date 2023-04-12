import { ARRAY } from './ARRAY';
import { NULL } from './NULL';

export function OBJECT<T extends object>(target: unknown): target is T {
  return typeof target === 'object' && !ARRAY(target) && !NULL(target);
}
