import { isConfig } from '../../config';
import { StringMethod } from '../string/string.method';
import regexp from '../../regexp';

export function AndroidPhoneMethod(target: unknown = isConfig.state.userAgent): boolean {
  if (this.AndroidPhoneMethod) {
    return true;
  }
  if (StringMethod.call(this, target)) {
    return (this.AndroidPhoneMethod = regexp.androidPhone.test(target as string));
  }
  return false;
}
