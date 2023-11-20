import { IsoMethod } from './iso/iso.method';

export function TodayMethod(dateString: string): boolean {
  if (this.TodayMethod) {
    return true;
  }

  if (!IsoMethod.call(this, dateString)) {
    return false;
  }

  const today = new Date();
  const parsedDate = new Date(dateString);

  return (this.TodayMethod = parsedDate.toDateString() === today.toDateString());
}
