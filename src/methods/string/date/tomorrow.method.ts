import { IsoMethod } from './iso/iso.method';

export function TomorrowMethod(target: string): boolean {
  if (!IsoMethod(target)) {
    return false;
  }

  const today = new Date();
  today.setDate(today.getDate() + 1);
  const parsedDate = new Date(target);

  return parsedDate.toDateString() === today.toDateString();
}
