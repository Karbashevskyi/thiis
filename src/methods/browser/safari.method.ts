import { isConfig } from '../../config';
import { StringMethod } from '../string/string.method';
import regexp from '../../regexp';

/**
 * If you need to check custom userAgent use argument "target" if you check your browser, please use with BrowserMethod: is.browser.safari
 */
export function SafariMethod(target: unknown = isConfig.state.userAgent): boolean {
  if (StringMethod(target)) {
    return regexp.safari.test(target);
  }
  return false;
}
