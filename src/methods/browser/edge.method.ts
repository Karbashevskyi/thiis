import { isConfig } from '../../config';
import { StringMethod } from '../string/string.method';
import regexp from '../../regexp';

/**
 * If you need to check custom userAgent use argument "target" if you check your browser, please use with BrowserMethod: is.browser.safari
 */
export function EdgeMethod(target: unknown = isConfig.state.userAgent): boolean {
  if (StringMethod(target)) {
    return regexp.edge.test(target);
  }
  return false;
}
