import { isConfig } from '../../config';
import { NUMBER } from '../number/NUMBER';
import { STRING } from '../string/STRING';

export function ANDROID_PHONE(target: unknown = isConfig.state.userAgent): boolean {
  if (STRING(target)) {
    return isConfig.regex.androidPhone.test(target);
  }
  return false;
}
