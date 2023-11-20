import {NumberMethod} from './number.method';
import {BigIntMethod} from './bigInt.method';

export function EvenMethod(target: unknown): target is number {
    if (this.EvenMethod) {
        return true;
    }
    if (NumberMethod.call(this, target)) {
        // @ts-ignore
        return this.EvenMethod = target % 2 === 0;
    } else if (BigIntMethod.call(this, target)) {
        // @ts-ignore
        return this.EvenMethod = target % BigInt(2) === BigInt(0);
    }
    return false;
}
