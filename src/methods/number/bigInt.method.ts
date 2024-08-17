export function BigIntMethod(target: unknown): target is bigint {
  return 'bigint' === typeof target;
}
