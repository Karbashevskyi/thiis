import { IphoneMethod } from './iphone.method';
import { IpodMethod } from './ipod.method';
import { AndroidPhoneMethod } from './android-phone.method';
import { BlackberryMethod } from './blackberry.method';
import { WindowsPhoneMethod } from './windows-phone.method';

export function MobileMethod(): boolean {
  if (this.MobileMethod) {
    return true;
  }
  return this.MobileMethod = (IphoneMethod.call(this) ||
      IpodMethod.call(this) ||
      AndroidPhoneMethod.call(this) ||
      BlackberryMethod.call(this) ||
      WindowsPhoneMethod.call(this));
}
