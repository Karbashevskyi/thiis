export function UndefinedMethod(target: unknown): target is undefined {
  if (this.UndefinedMethod) {
    return true;
  }
  return this.UndefinedMethod = target === undefined;
}
