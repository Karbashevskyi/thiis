import { IpadMethod } from '../hardware/ipad.method';
import { IpodMethod } from '../hardware/ipod.method';
import { IphoneMethod } from '../hardware/iphone.method';

export function IosMethod(target?: unknown): boolean {
  return IphoneMethod.apply(this, [target]) || IpadMethod.apply(this, [target]) || IpodMethod.apply(this, [target]);
}
