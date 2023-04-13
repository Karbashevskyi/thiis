import {not} from '../not';
import {or} from '../or';
import {SYMBOL} from '../SYMBOL';
import {isConfig} from '../../config';

export function IPV4(target: string): target is string {
    if (SYMBOL(target)) {
        return false;
    }
    return isConfig.regex.ipv4.test(target);
}

IPV4.allowed = [];
IPV4.originalName = 'ipv4';
