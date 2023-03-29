import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';

export function FirefoxMethod(argument: unknown = isConfig.state.userAgent): boolean {
    if (StringMethod(argument)) {
        return isConfig.regex.firefox.test(argument);
    }
    return false;
}
