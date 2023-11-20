import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';
import {WindowsMethod} from '../system/windows.method';
import regexp from '../../regexp';

export function WindowsPhoneMethod(target: unknown = isConfig.state.userAgent): boolean {
    if (this.WindowsPhoneMethod) {
        return true;
    }
    if (StringMethod.call(this, target)) {
        // @ts-ignore
        return this.WindowsPhoneMethod = WindowsMethod.call(this, target) && regexp.phone.test(target);
    }
    return false;
}
