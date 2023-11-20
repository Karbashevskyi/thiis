export function NullMethod(target: unknown): target is null {
  if (this.NullMethod) {
    return true;
  }
  return this.NullMethod = target === null;
}
