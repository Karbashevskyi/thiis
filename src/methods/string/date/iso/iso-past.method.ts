import { IsoMethod } from './iso.method';

export function IsoPastMethod(iso: string): boolean {
  return IsoMethod(iso) && Date.parse(iso) < Date.now();
}
