import {STRING} from './STRING';
import {isConfig} from '../../config';
import {not} from '../not';
import {or} from '../or';

export function WORD(target: string): target is string {
  if (STRING(target)) {
    return isConfig.regex.word.test(target);
  }
  return false;
}

WORD.allowed = [];
WORD.originalName = 'word';
