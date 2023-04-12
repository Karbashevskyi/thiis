/**
 *
 * @method instanceof
 * @param target object
 * @param classRef link to model
 */
export function INSTANCEOF<T>(target: unknown, classRef?: new (...args: any) => T): target is T {
  if (classRef instanceof Function) {
    return target instanceof classRef;
  }
  return false;
}
