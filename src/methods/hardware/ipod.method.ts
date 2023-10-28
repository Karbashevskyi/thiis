import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';
import regexp from '../../regexp';

export function IpodMethod(target: unknown = isConfig.state.userAgent): boolean {
    if (StringMethod(target)) {
        return regexp.ipod.test(target);
    }
    return false;
}
