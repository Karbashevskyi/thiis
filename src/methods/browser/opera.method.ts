import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';

export function OperaMethod(argument: unknown = isConfig.state.userAgent): boolean {
    if (StringMethod(argument)) {
        return isConfig.regex.opera.test(argument);
    }
    return false;
}
