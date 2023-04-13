import {not} from '../not';
import {or} from '../or';
import {NUMBER} from './NUMBER';
import {BIG_INT} from './BIG_INT';

export function ODD(target: unknown): target is number {
  if (NUMBER(target)) {
    return target % 2 === 1 || target % 2 === -1;
  } else if (BIG_INT(target)) {
    return target % BigInt(2) === BigInt(1) || target % BigInt(2) === BigInt(-1);
  }
  return false;
}

ODD.allowed = [];
ODD.originalName = 'odd';
