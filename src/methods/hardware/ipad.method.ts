import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';
import regexp from '../../regexp';

export function IpadMethod(target: unknown = isConfig.state.userAgent): boolean {
    if (StringMethod(target)) {
        return regexp.ipad.test(target);
    }
    return false;
}
