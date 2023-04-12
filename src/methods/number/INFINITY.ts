const _INFINITY: number = 1 / 0;
export function INFINITY(target: unknown): target is number {
  return target === _INFINITY || target === -_INFINITY;
}
