import regexp from '../../../../regexp';
import {StringMethod} from '../../string.method';

/**
 * ISO 8601 format.
 */
export function IsoMethod(iso: string): boolean {
    if (this.IsoMethod) {
        return true;
    }
    if (!StringMethod.call(this, iso)) {
        return false;
    }
    return this.IsoMethod = regexp.iso.any.test(iso);
}
