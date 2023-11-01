import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';
import regexp from '../../regexp';

export function MacMethod(target: unknown = isConfig.state.platform): boolean {
    if (StringMethod(target)) {
        return regexp.mac.test(target);
    }
    return false;
}
