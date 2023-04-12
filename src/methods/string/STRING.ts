export function STRING(target: unknown): target is string {
  return typeof target === 'string';
}
