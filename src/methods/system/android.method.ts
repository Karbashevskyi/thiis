import { isConfig } from '../../config';
import { StringMethod } from '../string/string.method';

export function AndroidMethod(target: unknown = isConfig.state.userAgent): boolean {
  if (StringMethod(target)) {
    return isConfig.regex.android.test(target);
  }
  return false;
}
