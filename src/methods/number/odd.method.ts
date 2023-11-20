import {NumberMethod} from './number.method';
import {BigIntMethod} from './bigInt.method';

export function OddMethod(target: unknown): target is number {
    if (this.OddMethod) {
        return true;
    }
    if (NumberMethod.call(this, target)) {
        // @ts-ignore
        return this.OddMethod = target % 2 === 1 || target % 2 === -1;
    } else if (BigIntMethod.call(this, target)) {
        // @ts-ignore
        return this.OddMethod = target % BigInt(2) === BigInt(1) || target % BigInt(2) === BigInt(-1);
    }
    return false;
}
