import {IsoMethod} from './iso/iso.method';

export function YesterdayMethod(target: string): boolean {
    if (this.YesterdayMethod) {
        return true;
    }

    if (!IsoMethod.call(this, target)) {
        return false;
    }

    const today = new Date();
    const parsedDate = new Date(target);
    parsedDate.setDate(parsedDate.getDate() + 1);

    return this.YesterdayMethod = parsedDate.toDateString() === today.toDateString();
}
