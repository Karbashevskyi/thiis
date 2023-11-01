import {StringMethod} from '../string.method';
import regexp from '../../../regexp';

export function PascalCaseMethod(target: unknown): target is string {
    if (StringMethod(target)) {
        return regexp.pascalCase.test(target);
    }
    return false;
}
