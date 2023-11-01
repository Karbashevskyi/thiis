import regexp from '../../regexp';
import {StringMethod} from './string.method';

export function Ipv6Method(target: string): target is string {
    if (StringMethod(target)) {
        return regexp.ipv6.test(target);
    }
    return false;
}
