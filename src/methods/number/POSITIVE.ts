import {not} from '../not';
import {or} from '../or';
import {NUMBER} from './NUMBER';

export function POSITIVE(target: unknown): target is number {
  return NUMBER(target) && target > 0;
}

POSITIVE.allowed = [];
POSITIVE.originalName = 'positive';
