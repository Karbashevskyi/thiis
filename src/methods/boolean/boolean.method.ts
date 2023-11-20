export function BooleanMethod(target: unknown): target is boolean {
  if (this.BooleanMethod) {
    return true;
  }
  return (this.BooleanMethod = typeof target === 'boolean');
}
