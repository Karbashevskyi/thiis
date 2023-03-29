import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';

export function SafariMethod(argument: unknown = isConfig.state.userAgent): boolean {
    if (StringMethod(argument)) {
        return isConfig.regex.safari.test(argument);
    }
    return false;
}
