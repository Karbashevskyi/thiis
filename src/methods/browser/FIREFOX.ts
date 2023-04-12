import { isConfig } from '../../config';
import { STRING } from '../string/STRING';

/**
 * If you need to check custom userAgent use argument "target" if you check your browser, please use with BROWSER: is.browser.safari
 */
export function FIREFOX(target: unknown = isConfig.state.userAgent): boolean {
  if (STRING(target)) {
    return isConfig.regex.firefox.test(target);
  }
  return false;
}