import {isConfig} from '../../config';
import {STRING} from '../string/STRING';
import {not} from '../not';
import {or} from '../or';

export function MAC(target: unknown = isConfig.state.platform): boolean {
  if (STRING(target)) {
    return isConfig.regex.mac.test(target);
  }
  return false;
}

MAC.allowed = [];
MAC.originalName = 'mac';
