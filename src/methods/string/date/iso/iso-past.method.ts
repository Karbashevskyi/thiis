import {IsoMethod} from './iso.method';

export function IsoPastMethod(iso: string): boolean {
    if (this.IsoPastMethod) {
        return true;
    }
    return this.IsoPastMethod = IsoMethod.call(this, iso) && Date.parse(iso) < Date.now();
}
