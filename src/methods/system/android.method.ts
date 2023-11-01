import { isConfig } from '../../config';
import { StringMethod } from '../string/string.method';
import regexp from '../../regexp';

export function AndroidMethod(target: unknown = isConfig.state.userAgent): boolean {
  if (StringMethod(target)) {
    return regexp.android.test(target);
  }
  return false;
}
