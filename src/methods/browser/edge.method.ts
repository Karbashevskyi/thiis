import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';

export function EdgeMethod(argument: unknown = isConfig.state.userAgent): boolean {
    if (StringMethod(argument)) {
        return isConfig.regex.edge.test(argument);
    }
    return false;
}
