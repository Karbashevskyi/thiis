import {not} from '../not';
import {or} from '../or';
import {isConfig} from '../../config';
import {STRING} from '../string/STRING';

export function IPOD(target: unknown = isConfig.state.userAgent): boolean {
  if (STRING(target)) {
    return isConfig.regex.ipod.test(target);
  }
  return false;
}

IPOD.allowed = [];
IPOD.originalName = 'ipod';
