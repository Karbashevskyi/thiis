export function StringMethod(target: unknown): target is string {
  return 'string' === typeof target;
}
