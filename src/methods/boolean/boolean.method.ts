export function BooleanMethod(target: unknown): target is boolean {
  return 'boolean' === typeof target;
}
