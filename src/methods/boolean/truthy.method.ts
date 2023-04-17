import { FalsyMethod } from './falsy.method';

export function TruthyMethod(target: unknown): target is true {
  const result = FalsyMethod.apply(this, [target]);
  return !result;
}
