import {not} from '../../not';
import {or} from '../../or';
import {isConfig} from '../../../config';
import {STRING} from '../STRING';

export function SNAKE_CASE(target: unknown): target is string {
  if (STRING(target)) {
    return isConfig.regex.snakeCase.test(target);
  }
  return false;
}

SNAKE_CASE.allowed = [];
SNAKE_CASE.originalName = 'snakeCase';
