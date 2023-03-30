import { FalsyMethod } from './falsy.method';

export function TruthyMethod(target: unknown): target is true {
  return !FalsyMethod(target);
}
