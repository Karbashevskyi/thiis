import {isConfig} from '../../config';
import {NumberMethod} from '../number/number.method';
import {StringMethod} from '../string/string.method';
import {WindowsMethod} from '../system/windows.method';

export function WindowsPhoneMethod(target: unknown = isConfig.state.userAgent): boolean {
    if (StringMethod(target)) {
        return WindowsMethod(target) && isConfig.regex.phone.test(target);
    }
    return false;
}
