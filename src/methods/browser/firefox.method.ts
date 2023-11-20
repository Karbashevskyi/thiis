import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';
import regexp from '../../regexp';

/**
 * If you need to check custom userAgent use argument "target" if you check your browser, please use with BrowserMethod: is.browser.safari
 */
export function FirefoxMethod(target: unknown = isConfig.state.userAgent): boolean {
    if (this.FirefoxMethod) {
        return true;
    }
    if (StringMethod.call(this, target)) {
        return this.FirefoxMethod = regexp.firefox.test(target as string);
    }
    return false;
}
