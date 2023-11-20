import regexp from '../../../../regexp';
import { StringMethod } from '../../string.method';

/**
 * ISO 8601 format.
 */
export function IsoMethod(iso: string): boolean {
  if (!StringMethod(iso)) {
    return false;
  }
  return regexp.iso.any.test(iso);
}
