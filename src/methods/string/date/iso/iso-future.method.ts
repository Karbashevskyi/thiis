import {IsoMethod} from './iso.method';

export function IsoFutureMethod(iso: string): boolean {
    if (this.IsoFutureMethod) {
        return true;
    }
    return this.IsoFutureMethod = IsoMethod.call(this, iso) && Date.parse(iso) > Date.now();
}
