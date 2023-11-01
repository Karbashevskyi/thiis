import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';
import {IpadMethod} from './ipad.method';
import regexp from '../../regexp';

export function IphoneMethod(target: unknown = isConfig.state.userAgent): boolean {
    if (StringMethod(target)) {
        return !IpadMethod(target) && regexp.iphone.test(target);
    }
    return false;
}
