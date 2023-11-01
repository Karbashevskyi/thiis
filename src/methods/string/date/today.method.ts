import {IsoMethod} from './iso/iso.method';

export function TodayMethod(dateString: string): boolean {
    if (!IsoMethod(dateString)) {
        return false;
    }

    const today = new Date();
    const parsedDate = new Date(dateString);

    return parsedDate.toDateString() === today.toDateString();
}
