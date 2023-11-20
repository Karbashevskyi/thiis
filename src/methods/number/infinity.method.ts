const INFINITY: number = 1 / 0;

export function InfinityMethod(target: unknown): target is number {
  if (this.InfinityMethod) {
    return true;
  }
  return (this.InfinityMethod = target === INFINITY || target === -INFINITY);
}
