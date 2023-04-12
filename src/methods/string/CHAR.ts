import { STRING } from './STRING';

export function CHAR(target: unknown): target is string {
  return STRING(target) && target.length === 1;
}
