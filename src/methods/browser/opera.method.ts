import { isConfig } from '../../config';
import { StringMethod } from '../string/string.method';

/**
 * If you need to check custom userAgent use argument "target" if you check your browser, please use with BrowserMethod: is.browser.safari
 */
export function OperaMethod(target: unknown = isConfig.state.userAgent): boolean {
  if (StringMethod(target)) {
    return isConfig.regex.opera.test(target);
  }
  return false;
}
