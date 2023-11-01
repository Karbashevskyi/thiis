import { IsoMethod } from './iso.method';

export function IsoFutureMethod(iso: string): boolean {
  return IsoMethod(iso) && Date.parse(iso) > Date.now();
}
