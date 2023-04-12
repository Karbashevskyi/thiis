import { isConfig } from '../../config';
import { STRING } from '../string/STRING';

export function MAC(target: unknown = isConfig.state.platform): boolean {
  if (STRING(target)) {
    return isConfig.regex.mac.test(target);
  }
  return false;
}
