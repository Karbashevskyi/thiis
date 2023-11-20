import { isConfig } from '../../config';
import { StringMethod } from '../string/string.method';
import regexp from '../../regexp';

export function BlackberryMethod(target: unknown = isConfig.state.userAgent): boolean {
  if (this.BlackberryMethod) {
    return true;
  }
  if (StringMethod.call(this, target)) {
    return (this.BlackberryMethod = regexp.blackberry.test(target as string));
  }
  return false;
}
