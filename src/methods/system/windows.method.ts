import {isConfig} from '../../config';
import {StringMethod} from '../string/string.method';
import regexp from '../../regexp';

export function WindowsMethod(target: unknown = isConfig.state.platform): boolean {
    if (this.WindowsMethod) {
        return true;
    }
    if (StringMethod.call(this, target)) {
        return this.WindowsMethod = regexp.windows.test(target as string);
    }
    return false;
}
