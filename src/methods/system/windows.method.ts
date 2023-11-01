import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';
import regexp from '../../regexp';

export function WindowsMethod(target: unknown = isConfig.state.platform): boolean {
  if (StringMethod(target)) {
    return regexp.windows.test(target);
  }
  return false;
}
