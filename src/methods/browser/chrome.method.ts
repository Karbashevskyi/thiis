import { isConfig } from '../../config';
import { StringMethod } from '../string/string.method';

/**
 * If you need to check custom userAgent use argument "target" if you check your browser, please use with BrowserMethod: is.browser.safari
 */
export function ChromeMethod(
  target: unknown = isConfig.state.userAgent,
  vendor: unknown = isConfig.state.vendor,
): boolean {
  if (StringMethod.apply(this, [target]) && StringMethod.apply(this, [vendor])) {
    return isConfig.regex.chrome.test(target as string) && isConfig.regex.googleInc.test(vendor as string);
  }
  return false;
}
