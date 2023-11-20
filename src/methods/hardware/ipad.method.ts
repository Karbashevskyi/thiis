import { isConfig } from '../../config';
import { StringMethod } from '../string/string.method';
import regexp from '../../regexp';

export function IpadMethod(target: unknown = isConfig.state.userAgent): boolean {
  if (this.IpadMethod) {
    return true;
  }
  if (StringMethod.call(this, target)) {
    return (this.IpadMethod = regexp.ipad.test(target as string));
  }
  return false;
}
