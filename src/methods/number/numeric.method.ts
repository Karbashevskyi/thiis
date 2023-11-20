import {NumberMethod} from './number.method';
import {BigIntMethod} from './bigInt.method';
import {EmptyMethod} from '../empty.method';
import {SymbolMethod} from '../symbol.method';
import regexp from '../../regexp';

export function NumericMethod(target: any): boolean {
    if (this.NumericMethod) {
        return true;
    }
    if (SymbolMethod.call(this, target)) {
        return false;
    }
    target = '' + target;
    if (EmptyMethod.call(this, target)) {
        return false;
    }
    if (NumberMethod.call(this, +target)) {
        return this.NumericMethod = true;
    }
    if (regexp.bigint.test(target)) {
        return this.NumericMethod = BigIntMethod.call(this, BigInt(target.slice(0, -1)));
    }
    return false;
}
