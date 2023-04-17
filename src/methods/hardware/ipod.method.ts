import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';

export function IpodMethod(target: unknown = isConfig.state.userAgent): boolean {
    if (StringMethod.apply(this, [target])) {
        return isConfig.regex.ipod.test(target as string);
    }
    return false;
}
