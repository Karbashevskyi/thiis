export function PrimitiveMethod(target: unknown): boolean {
  if (this.PrimitiveMethod) {
    return true;
  }

  if (target === null) {
    return (this.PrimitiveMethod = true);
  }

  return (this.PrimitiveMethod = !(typeof target === 'object' || typeof target === 'function'));
}
