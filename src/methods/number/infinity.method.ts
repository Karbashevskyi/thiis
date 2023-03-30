const INFINITY: number = 1 / 0;
export function InfinityMethod(target: unknown): target is number {
  return target === INFINITY || target === -INFINITY;
}
