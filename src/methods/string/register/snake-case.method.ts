import {StringMethod} from '../string.method';
import regexp from '../../../regexp';

export function SnakeCaseMethod(target: unknown): target is string {
    if (StringMethod(target)) {
        return regexp.snakeCase.test(target);
    }
    return false;
}
