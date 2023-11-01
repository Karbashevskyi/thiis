import {IsoMethod} from './iso/iso.method';

export function TodayMethod(dateString: string): boolean {
    if (!IsoMethod(dateString)) {
        return false;
    }

    const today = new Date();
    const parsedDate = new Date(dateString);

    return (
        parsedDate.getDate() === today.getDate() &&
        parsedDate.getMonth() === today.getMonth() &&
        parsedDate.getFullYear() === today.getFullYear()
    );
}
