export function BIG_INT(target: unknown): target is bigint {
  return typeof target === 'bigint';
}
