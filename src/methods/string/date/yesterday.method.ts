import {IsoMethod} from './iso/iso.method';

export function YesterdayMethod(target: string): boolean {
    if (!IsoMethod(target)) {
        return false;
    }

    const today = new Date();
    const parsedDate = new Date(target);
    parsedDate.setDate(parsedDate.getDate() + 1);

    return parsedDate.toDateString() === today.toDateString();
}
