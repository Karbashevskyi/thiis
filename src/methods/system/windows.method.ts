import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';

export function WindowsMethod(target: unknown = isConfig.state.platform): boolean {
    if (StringMethod(target)) {
        return isConfig.regex.windows.test(target);
    }
    return false;
}
