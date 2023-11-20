import { isConfig } from '../../config';
import { StringMethod } from '../string/string.method';
import { IpadMethod } from './ipad.method';
import regexp from '../../regexp';

export function IphoneMethod(target: unknown = isConfig.state.userAgent): boolean {
  if (this.IphoneMethod) {
    return true;
  }
  if (StringMethod.call(this, target)) {
    return (this.IphoneMethod = !IpadMethod.call(this, target) && regexp.iphone.test(target as string));
  }
  return false;
}
