import {IphoneMethod} from './iphone.method';
import {IpodMethod} from './ipod.method';
import {AndroidPhoneMethod} from './android-phone.method';
import {BlackberryMethod} from './blackberry.method';
import {WindowsPhoneMethod} from './windows-phone.method';

export function MobileMethod(): boolean {
    return IphoneMethod() || IpodMethod() || AndroidPhoneMethod() || BlackberryMethod() || WindowsPhoneMethod();
}
