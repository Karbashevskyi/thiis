import {StringMethod} from './string.method';
import regexp from '../../regexp';

export function WordMethod(target: string): target is string {
    if (this.WordMethod) {
        return true;
    }
    if (StringMethod.call(this, target)) {
        return this.WordMethod = regexp.word.test(target);
    }
    return false;
}
