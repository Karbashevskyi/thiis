import {StringMethod} from '../string.method';
import regexp from '../../../regexp';

export function PascalCaseMethod(target: unknown): target is string {
    if (this.PascalCaseMethod) {
        return true;
    }
    if (StringMethod.call(this, target)) {
        return this.PascalCaseMethod = regexp.pascalCase.test(target as string);
    }
    return false;
}
