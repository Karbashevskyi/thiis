import { isConfig } from '../../config';
import { NUMBER } from '../number/NUMBER';
import { STRING } from '../string/STRING';

export function IPOD(target: unknown = isConfig.state.userAgent): boolean {
  if (STRING(target)) {
    return isConfig.regex.ipod.test(target);
  }
  return false;
}
