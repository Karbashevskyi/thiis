import { IPAD } from '../hardware/IPAD';
import { IPOD } from '../hardware/IPOD';
import { IPHONE } from '../hardware/IPHONE';

export function IOS(target?: unknown): boolean {
  return IPHONE(target) || IPAD(target) || IPOD(target);
}
