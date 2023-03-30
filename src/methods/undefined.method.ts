export function UndefinedMethod(target: unknown): target is undefined {
  return target === undefined;
}
