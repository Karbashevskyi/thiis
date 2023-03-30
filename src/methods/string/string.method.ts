export function StringMethod(target: unknown): target is string {
  return typeof target === 'string';
}
