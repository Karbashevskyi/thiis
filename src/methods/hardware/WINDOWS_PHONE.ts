import { isConfig } from '../../config';
import { NUMBER } from '../number/NUMBER';
import { STRING } from '../string/STRING';
import { WINDOWS } from '../system/WINDOWS';

export function WINDOWS_PHONE(target: unknown = isConfig.state.userAgent): boolean {
  if (STRING(target)) {
    return WINDOWS(target) && isConfig.regex.phone.test(target);
  }
  return false;
}
