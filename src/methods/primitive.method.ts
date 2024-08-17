export function PrimitiveMethod(target: unknown): boolean {
  if (null === target) {
    return true;
  }

  return !('object' === typeof target || 'function' === typeof target);
}
