import {not} from '../not';
import {or} from '../or';
export function ZERO(target: unknown): target is 0 {
  return target === 0;
}

ZERO.allowed = [];
ZERO.originalName = 'zero';
