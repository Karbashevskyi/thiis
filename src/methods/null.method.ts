export function NullMethod(target: unknown): target is null {
  return target === null;
}
