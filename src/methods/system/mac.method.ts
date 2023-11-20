import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';
import regexp from '../../regexp';

export function MacMethod(target: unknown = isConfig.state.platform): boolean {
    if (this.MacMethod) {
        return true;
    }
    if (StringMethod.call(this, target)) {
        return this.MacMethod = regexp.mac.test(target as string);
    }
    return false;
}
