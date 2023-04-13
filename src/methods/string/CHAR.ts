import {not} from '../not';
import {or} from '../or';
import {STRING} from './STRING';

export function CHAR(target: unknown): target is string {
  return STRING(target) && target.length === 1;
}

CHAR.allowed = [];
CHAR.originalName = 'char';
