import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';

export function IpadMethod(target: unknown = isConfig.state.userAgent): boolean {
    if (StringMethod.apply(this, [target])) {
        return isConfig.regex.ipad.test(target as string);
    }
    return false;
}
