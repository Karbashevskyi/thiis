export function TrueMethod(target: unknown): target is true {
  if (this.TrueMethod) {
    return true;
  }
  return (this.TrueMethod = target === true);
}
