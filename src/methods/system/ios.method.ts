import { IpadMethod } from '../hardware/ipad.method';
import { IpodMethod } from '../hardware/ipod.method';
import { IphoneMethod } from '../hardware/iphone.method';

export function IosMethod(target?: unknown): boolean {
  if (this.IosMethod) {
    return true;
  }
  return (this.IosMethod =
    IphoneMethod.call(this, target) || IpadMethod.call(this, target) || IpodMethod.call(this, target));
}
