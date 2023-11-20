import {IsoMethod} from './iso/iso.method';

export function TomorrowMethod(target: string): boolean {
    if (this.TomorrowMethod) {
        return true;
    }

    if (!IsoMethod.call(this, target)) {
        return false;
    }

    const today = new Date();
    today.setDate(today.getDate() + 1);
    const parsedDate = new Date(target);

    return this.TomorrowMethod = parsedDate.toDateString() === today.toDateString();
}
