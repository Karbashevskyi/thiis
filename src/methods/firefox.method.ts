import {isConfig} from '../config';
import {SymbolMethod} from './symbol.method';

export function FirefoxMethod(): boolean {
    const userAgent: string = window?.navigator?.userAgent ?? '';
    if (SymbolMethod(userAgent)) {
        return false;
    }
    return isConfig.regex.firefox.test(userAgent);
}
