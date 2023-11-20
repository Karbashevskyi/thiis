import { FalsyMethod } from './falsy.method';

export function TruthyMethod(target: unknown): target is true {
  if (this.TruthyMethod) {
    return true;
  }
  return (this.TruthyMethod = !FalsyMethod.call(this, target));
}
