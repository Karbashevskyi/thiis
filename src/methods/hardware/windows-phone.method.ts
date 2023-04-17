import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';
import {WindowsMethod} from '../system/windows.method';

export function WindowsPhoneMethod(target: unknown = isConfig.state.userAgent): boolean {
    if (StringMethod.apply(this, [target])) {
        return WindowsMethod.apply(this, [target]) && isConfig.regex.phone.test(target as string);
    }
    return false;
}
