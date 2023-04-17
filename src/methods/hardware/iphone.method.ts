import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';
import {IpadMethod} from './ipad.method';

export function IphoneMethod(target: unknown = isConfig.state.userAgent): boolean {
    if (StringMethod.apply(this, [target])) {
        return !IpadMethod.apply(this, [target]) && isConfig.regex.iphone.test(target as string);
    }
    return false;
}
