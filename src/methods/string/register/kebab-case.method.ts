import {StringMethod} from '../string.method';
import regexp from '../../../regexp';

export function KebabCaseMethod(target: unknown): target is string {
    if (this.KebabCaseMethod) {
        return true;
    }
    if (StringMethod.call(this, target)) {
        return this.KebabCaseMethod = regexp.kebabCase.test(target as string);
    }
    return false;
}
