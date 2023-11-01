import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';
import regexp from '../../regexp';

export function BlackberryMethod(target: unknown = isConfig.state.userAgent): boolean {
    if (StringMethod(target)) {
        return regexp.blackberry.test(target);
    }
    return false;
}
