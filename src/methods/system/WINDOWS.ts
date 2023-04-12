import { isConfig } from '../../config';
import { STRING } from '../string/STRING';

export function WINDOWS(target: unknown = isConfig.state.platform): boolean {
  if (STRING(target)) {
    return isConfig.regex.windows.test(target);
  }
  return false;
}
