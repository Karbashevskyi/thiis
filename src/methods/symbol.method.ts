export function SymbolMethod(target: unknown): target is symbol {
  return 'symbol' === typeof target;
}
