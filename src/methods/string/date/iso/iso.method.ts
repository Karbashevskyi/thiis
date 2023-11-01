import regexp from '../../../../regexp';

/**
 * ISO 8601 format.
 */
export function IsoMethod(iso: string): boolean {
    return regexp.iso.any.test(iso);
}
