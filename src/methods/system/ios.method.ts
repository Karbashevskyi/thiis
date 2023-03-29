import {IpadMethod} from '../hardware/ipad.method';
import {IpodMethod} from '../hardware/ipod.method';
import {IphoneMethod} from '../hardware/iphone.method';

export function IosMethod(argument?: unknown): boolean {
    return IphoneMethod(argument) || IpadMethod(argument) || IpodMethod(argument);
}
