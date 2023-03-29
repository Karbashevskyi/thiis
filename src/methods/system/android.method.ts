import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';

export function AndroidMethod(target: unknown = isConfig.state.userAgent): boolean {
    if (StringMethod(target)) {
        return /android/i.test(target);
    }
    return false;
}
