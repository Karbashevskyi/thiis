import { isConfig } from '../../config';
import { StringMethod } from '../string/string.method';

export function AndroidMethod(target: unknown = isConfig.state.userAgent): boolean {
  if (StringMethod.apply(this, [target])) {
    return isConfig.regex.android.test(target as string);
  }
  return false;
}
