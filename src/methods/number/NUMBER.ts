import {not} from '../not';
import {or} from '../or';
import {INFINITY} from './INFINITY';

export function NUMBER(target: unknown): target is number {
  return typeof target === 'number' && !isNaN(target) && !INFINITY(target);
}

NUMBER.allowed = [];
NUMBER.originalName = 'number';
