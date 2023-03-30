export function BigIntMethod(target: unknown): target is bigint {
  return typeof target === 'bigint';
}
