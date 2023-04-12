import { isConfig } from '../../config';
import { NUMBER } from '../number/NUMBER';
import { STRING } from '../string/STRING';
import { IPAD } from './IPAD';

export function IPHONE(target: unknown = isConfig.state.userAgent): boolean {
  if (STRING(target)) {
    return !IPAD(target) && isConfig.regex.iphone.test(target);
  }
  return false;
}
