import { isConfig } from '../../config';
import { StringMethod } from '../string/string.method';
import { WindowsMethod } from '../system/windows.method';
import regexp from '../../regexp';

export function WindowsPhoneMethod(target: unknown = isConfig.state.userAgent): boolean {
  if (StringMethod(target)) {
    return WindowsMethod(target) && regexp.phone.test(target);
  }
  return false;
}
