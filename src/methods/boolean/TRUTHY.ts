import { FALSY } from './FALSY';

export function TRUTHY(target: unknown): target is true {
  return !FALSY(target);
}
