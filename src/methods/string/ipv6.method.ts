import {isConfig} from '../../config';
import {SymbolMethod} from '../symbol.method';

export function Ipv6Method(target: string): target is string {
    if (SymbolMethod.apply(this, [target])) {
        return false;
    }
    return isConfig.regex.ipv6.test(target);
}
