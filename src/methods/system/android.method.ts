import { isConfig } from '../../config';
import { StringMethod } from '../string/string.method';
import regexp from '../../regexp';

export function AndroidMethod(target: unknown = isConfig.state.userAgent): boolean {
  if (this.AndroidMethod) {
    return true;
  }
  if (StringMethod.call(this, target)) {
    return (this.AndroidMethod = regexp.android.test(target as string));
  }
  return false;
}
