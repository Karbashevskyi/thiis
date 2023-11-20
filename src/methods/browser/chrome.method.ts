import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';
import regexp from '../../regexp';

/**
 * If you need to check custom userAgent use argument "target" if you check your browser, please use with BrowserMethod: is.browser.safari
 */
export function ChromeMethod(
    target: unknown = isConfig.state.userAgent,
    vendor: unknown = isConfig.state.vendor,
): boolean {
    if (this.ChromeMethod) {
        return true;
    }
    if (StringMethod.call(this, target) && StringMethod.call(this, vendor)) {
        return this.ChromeMethod = regexp.chrome.test(target as string) && regexp.googleInc.test(vendor as string);
    }
    return false;
}
