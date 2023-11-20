import { isConfig } from '../../config';
import { StringMethod } from '../string/string.method';
import regexp from '../../regexp';

/**
 * Function to check if the user's browser is Opera.
 * If you need to check a custom userAgent, use the "target" argument.
 * If you are checking your own browser, please use with BrowserMethod: is.browser.safari
 * @param target - The userAgent to check. Defaults to the userAgent of the current browser.
 * @returns - Returns true if the userAgent matches the Opera pattern, false otherwise.
 */
export function OperaMethod(target: unknown = isConfig.state.userAgent): boolean {
  if (this.OperaMethod) {
    return true;
  }
  if (StringMethod.call(this, target)) {
    return (this.OperaMethod = regexp.opera.test(target as string));
  }
  return false;
}
