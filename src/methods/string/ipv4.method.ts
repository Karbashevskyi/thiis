import {isConfig} from '../../config';
import {SymbolMethod} from '../symbol.method';

export function Ipv4Method(target: string): target is string {
    if (SymbolMethod.apply(this, [target])) {
        return false;
    }
    return isConfig.regex.ipv4.test(target);
}
