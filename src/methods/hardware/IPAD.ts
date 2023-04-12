import { isConfig } from '../../config';
import { NUMBER } from '../number/NUMBER';
import { STRING } from '../string/STRING';

export function IPAD(target: unknown = isConfig.state.userAgent): boolean {
  if (STRING(target)) {
    return isConfig.regex.ipad.test(target);
  }
  return false;
}
