import { NUMBER } from './NUMBER';
import { BIG_INT } from './BIG_INT';
import { isConfig } from '../../config';
import { EMPTY } from '../EMPTY';
import { SYMBOL } from '../SYMBOL';

export function NUMERIC(target: any): boolean {
  if (SYMBOL(target)) {
    return false;
  }
  target = '' + target;
  if (EMPTY(target)) {
    return false;
  }
  if (NUMBER(+target)) {
    return true;
  }
  if (isConfig.regex.bigint.test(target)) {
    return BIG_INT(BigInt(target.slice(0, -1)));
  }
  return false;
}
