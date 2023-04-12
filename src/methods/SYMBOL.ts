export function SYMBOL(target: unknown): target is symbol {
  return typeof target === 'symbol';
}
