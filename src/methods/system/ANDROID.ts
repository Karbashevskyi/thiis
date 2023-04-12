import { isConfig } from '../../config';
import { STRING } from '../string/STRING';

export function ANDROID(target: unknown = isConfig.state.userAgent): boolean {
  if (STRING(target)) {
    return isConfig.regex.android.test(target);
  }
  return false;
}
