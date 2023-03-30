import { IpadMethod } from '../hardware/ipad.method';
import { IpodMethod } from '../hardware/ipod.method';
import { IphoneMethod } from '../hardware/iphone.method';

export function IosMethod(target?: unknown): boolean {
  return IphoneMethod(target) || IpadMethod(target) || IpodMethod(target);
}
