import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';
import regexp from '../../regexp';

export function IpodMethod(target: unknown = isConfig.state.userAgent): boolean {
    if (this.IpodMethod) {
        return true;
    }
    if (StringMethod.call(this, target)) {
        return this.IpodMethod = regexp.ipod.test(target as string);
    }
    return false;
}
