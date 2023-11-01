import {StringMethod} from '../string.method';

export function TodayMethod(dateString: string): boolean {
    if (!StringMethod(dateString)) {
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
