import {isConfig} from '../../config';
import {STRING} from '../string/STRING';
import {not} from '../not';
import {or} from '../or';

export function ANDROID(target: unknown = isConfig.state.userAgent): boolean {
  if (STRING(target)) {
    return isConfig.regex.android.test(target);
  }
  return false;
}

ANDROID.allowed = [];
ANDROID.originalName = 'android';
