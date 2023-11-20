import {InfinityMethod} from './infinity.method';

export function NumberMethod(target: unknown): target is number {
    if (this.NumberMethod) {
        return true;
    }
    return this.NumberMethod = typeof target === 'number' && !isNaN(target) && !InfinityMethod.call(this, target);
}
