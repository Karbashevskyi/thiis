import {not} from '../not';
import {or} from '../or';
import {isConfig} from '../../config';
import {STRING} from '../string/STRING';

export function ANDROID_PHONE(target: unknown = isConfig.state.userAgent): boolean {
  if (STRING(target)) {
    return isConfig.regex.androidPhone.test(target);
  }
  return false;
}


ANDROID_PHONE.allowed = [];
ANDROID_PHONE.originalName = 'androidPhone';
