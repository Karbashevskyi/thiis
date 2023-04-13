import {not} from '../not';
import {or} from '../or';
import {isConfig} from '../../config';
import {STRING} from '../string/STRING';
import {IPAD} from './IPAD';

export function IPHONE(target: unknown = isConfig.state.userAgent): boolean {
    if (STRING(target)) {
        return !IPAD(target) && isConfig.regex.iphone.test(target);
    }
    return false;
}

IPHONE.allowed = [];
IPHONE.originalName = 'iphone';
