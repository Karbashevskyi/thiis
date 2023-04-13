import {IPAD} from '../hardware/IPAD';
import {IPOD} from '../hardware/IPOD';
import {IPHONE} from '../hardware/IPHONE';
import {not} from '../not';
import {or} from '../or';

export function IOS(target?: unknown): boolean {
  return IPHONE(target) || IPAD(target) || IPOD(target);
}

IOS.allowed = [];
IOS.originalName = 'ios';
