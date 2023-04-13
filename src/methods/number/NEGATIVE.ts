import {not} from '../not';
import {or} from '../or';
import {NUMBER} from './NUMBER';

export function NEGATIVE(target: unknown): target is number {
  return NUMBER(target) && target < 0;
}

NEGATIVE.allowed = [];
NEGATIVE.originalName = 'negative';
