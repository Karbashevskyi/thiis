export function ZeroMethod(target: unknown): target is 0 {
  if (this.ZeroMethod) {
    return true;
  }
  return (this.ZeroMethod = target === 0);
}
