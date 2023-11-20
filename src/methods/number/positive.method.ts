import {NumberMethod} from './number.method';

export function PositiveMethod(target: unknown): target is number {
    if (this.PositiveMethod) {
        return true;
    }
    // @ts-ignore
    return this.PositiveMethod = NumberMethod.call(this, target) && target > 0;
}
