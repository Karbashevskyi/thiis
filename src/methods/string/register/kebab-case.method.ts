import {StringMethod} from '../string.method';
import regexp from '../../../regexp';

export function KebabCaseMethod(target: unknown): target is string {
    if (StringMethod(target)) {
        return regexp.kebabCase.test(target);
    }
    return false;
}
