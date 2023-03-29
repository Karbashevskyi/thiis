import {isConfig} from '../../config';
import {NumberMethod} from '../number/number.method';
import {StringMethod} from '../string/string.method';
import {IpadMethod} from './ipad.method';

export function IphoneMethod(target: unknown = isConfig.state.userAgent): boolean {
    if (StringMethod(target)) {
        return !IpadMethod(target) && isConfig.regex.iphone.test(target);
    }
    return false;
}
