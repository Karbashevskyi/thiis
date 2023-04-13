import {not} from '../../not';
import {or} from '../../or';
import {isConfig} from '../../../config';
import {STRING} from '../STRING';

export function KEBAB_CASE(target: unknown): target is string {
  if (STRING(target)) {
    return isConfig.regex.kebabCase.test(target);
  }
  return false;
}

KEBAB_CASE.allowed = [];
KEBAB_CASE.originalName = 'kebabCase';
