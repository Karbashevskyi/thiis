export function SymbolMethod(target: unknown): target is symbol {
  return typeof target === 'symbol';
}
