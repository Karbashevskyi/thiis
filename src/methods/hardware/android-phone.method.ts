import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';

export function AndroidPhoneMethod(target: unknown = isConfig.state.userAgent): boolean {
    if (StringMethod.apply(this, [target])) {
        return isConfig.regex.androidPhone.test(target as string);
    }
    return false;
}
