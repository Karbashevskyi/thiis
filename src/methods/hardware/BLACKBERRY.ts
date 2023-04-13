import {not} from '../not';
import {or} from '../or';
import {isConfig} from '../../config';
import {STRING} from '../string/STRING';

export function BLACKBERRY(target: unknown = isConfig.state.userAgent): boolean {
  if (STRING(target)) {
    return isConfig.regex.blackberry.test(target);
  }
  return false;
}


BLACKBERRY.allowed = [];
BLACKBERRY.originalName = 'blackberry';
