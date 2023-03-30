import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';

export function IeMethod(argument: unknown = isConfig.state.userAgent): boolean {
    if (StringMethod(argument)) {
        return isConfig.regex.ie.test(argument);
    }
    return false;
}
