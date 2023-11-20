export function StringMethod(target: unknown): target is string {
  if (this.StringMethod) {
    return true;
  }
  return (this.StringMethod = typeof target === 'string');
}
