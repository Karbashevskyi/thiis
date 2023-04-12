import {IPHONE} from './IPHONE';
import {IPOD} from './IPOD';
import {ANDROID_PHONE} from './ANDROID_PHONE';
import {BLACKBERRY} from './BLACKBERRY';
import {WINDOWS_PHONE} from './WINDOWS_PHONE';

export function MOBILE(): boolean {
    return IPHONE() || IPOD() || ANDROID_PHONE() || BLACKBERRY() || WINDOWS_PHONE();
}
