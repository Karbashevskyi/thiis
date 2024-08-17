export function TrueMethod(target: unknown): target is true {
  return true === target;
}
