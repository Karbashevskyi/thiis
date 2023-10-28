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
    if (StringMethod(target) && StringMethod(vendor)) {
        return regexp.chrome.test(target) && regexp.googleInc.test(vendor);
    }
    return false;
}
