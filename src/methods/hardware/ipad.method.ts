import { isConfig } from '../../config';
import { NumberMethod } from '../number/number.method';
import { StringMethod } from '../string/string.method';

export function IpadMethod(target: unknown = isConfig.state.userAgent): boolean {
  if (StringMethod(target)) {
    return isConfig.regex.ipad.test(target);
  }
  return false;
}
