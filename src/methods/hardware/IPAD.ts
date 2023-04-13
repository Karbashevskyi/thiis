import {not} from '../not';
import {or} from '../or';
import {isConfig} from '../../config';
import {STRING} from '../string/STRING';

export function IPAD(target: unknown = isConfig.state.userAgent): boolean {
    if (STRING(target)) {
        return isConfig.regex.ipad.test(target);
    }
    return false;
}

IPAD.allowed = [];
IPAD.originalName = 'ipad';
