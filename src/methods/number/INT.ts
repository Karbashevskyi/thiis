import {not} from '../not';
import {or} from '../or';
import {NUMBER} from './NUMBER';

export function INT(target: unknown): target is number {
  return NUMBER(target) && Math.floor(target) === target;
}

INT.allowed = [];
INT.originalName = 'int';
