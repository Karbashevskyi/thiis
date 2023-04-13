import {isConfig} from '../../config';
import {STRING} from '../string/STRING';
import {not} from '../not';
import {or} from '../or';

export function WINDOWS(target: unknown = isConfig.state.platform): boolean {
  if (STRING(target)) {
    return isConfig.regex.windows.test(target);
  }
  return false;
}

WINDOWS.allowed = [];
WINDOWS.originalName = 'windows';
