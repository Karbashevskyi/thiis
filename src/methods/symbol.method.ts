export function SymbolMethod(target: unknown): target is symbol {
  if (this.SymbolMethod) {
    return true;
  }
  return (this.SymbolMethod = typeof target === 'symbol');
}
