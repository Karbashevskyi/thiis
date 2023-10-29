export function PrimitiveMethod(target: unknown): boolean {
  if (target === null) {
    return true;
  }

  return !(typeof target === 'object' || typeof target === 'function');
}
