import {not} from '../../not';
import {or} from '../../or';
import {isConfig} from '../../../config';
import {STRING} from '../STRING';

export function PASCAL_CASE(target: unknown): target is string {
  if (STRING(target)) {
    return isConfig.regex.pascalCase.test(target);
  }
  return false;
}

PASCAL_CASE.allowed = [];
PASCAL_CASE.originalName = 'pascalCase';