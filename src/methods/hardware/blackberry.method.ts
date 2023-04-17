import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';

export function BlackberryMethod(target: unknown = isConfig.state.userAgent): boolean {
    if (StringMethod.apply(this, [target])) {
        return isConfig.regex.blackberry.test(target as string);
    }
    return false;
}
