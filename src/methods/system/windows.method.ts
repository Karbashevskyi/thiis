import { isConfig } from '../../config';
import { StringMethod } from '../string/string.method';

export function WindowsMethod(target: unknown = isConfig.state.platform): boolean {
  if (StringMethod.apply(this, [target])) {
    return isConfig.regex.windows.test(target as string);
  }
  return false;
}
