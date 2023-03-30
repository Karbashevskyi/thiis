export function FalsyMethod(target: unknown): target is false {
  return !target;
}
