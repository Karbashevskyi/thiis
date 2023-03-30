export function BooleanMethod(target: unknown): target is boolean {
  return typeof target === 'boolean';
}
