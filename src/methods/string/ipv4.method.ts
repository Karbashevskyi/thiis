import {SymbolMethod} from '../symbol.method';
import regexp from '../../regexp';

export function Ipv4Method(target: string): target is string {
    if (SymbolMethod(target)) {
        return false;
    }
    return regexp.ipv4.test(target);
}
