import {isConfig} from '../../config';
import {STRING} from '../string/STRING';
import {is} from '../../index';

/**
 * If you need to check custom userAgent use argument "target" if you check your browser, please use with BROWSER: is.browser.safari
 */
export function CHROME(
    target: unknown = isConfig.state.userAgent,
    vendor: unknown = isConfig.state.vendor,
): boolean {
    if (STRING(target) && STRING(vendor)) {
        return isConfig.regex.chrome.test(target) && isConfig.regex.googleInc.test(vendor);
    }
    return false;
}


CHROME.allowed = [];
CHROME.originalName = 'chrome';
