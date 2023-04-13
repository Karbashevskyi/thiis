import {isConfig} from '../../config';
import {STRING} from '../string/STRING';
import {is} from '../../index';

/**
 * If you need to check custom userAgent use argument "target" if you check your browser, please use with BROWSER: is.browser.safari
 */
export function EDGE(target: unknown = isConfig.state.userAgent): boolean {
    if (STRING(target)) {
        return isConfig.regex.edge.test(target);
    }
    return false;
}

EDGE.allowed = [];
EDGE.originalName = 'edge';
