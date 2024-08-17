export function UndefinedMethod(target: unknown): target is undefined {
  return undefined === target;
}
