import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';

export function MacMethod(target: unknown = isConfig.state.platform): boolean {
    if (StringMethod(target)) {
        return isConfig.regex.mac.test(target);
    }
    return false;
}
