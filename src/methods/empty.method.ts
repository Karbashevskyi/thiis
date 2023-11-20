import { StringMethod } from './string/string.method';
import { ObjectMethod } from './object.method';
import { ArrayMethod } from './array.method';

/**
 * Function to check if the target is empty.
 * This function can handle objects, arrays, and strings.
 * For objects and arrays, it checks if they have any properties or elements.
 * For strings, it checks if they are empty or only contain whitespace.
 * @param target - The target to check.
 * @returns - Returns true if the target is empty, false otherwise.
 */
export function EmptyMethod(target: unknown): boolean {
  if (this.EmptyMethod) {
    return true;
  }

  /**
   * Check if the target is an object or an array.
   * If it is, check if it has any properties or elements.
   * If it has, return false. If it doesn't, return true.
   */
  if (ObjectMethod.call(this, target) || ArrayMethod.call(this, target)) {
    // @ts-ignore
    if ('size' in target) {
      // @ts-ignore
      return (this.EmptyMethod = target.size <= 0);
    }
    // @ts-ignore
    for (const key in target) {
      // @ts-ignore
      if (target.hasOwnProperty(key)) {
        return false;
      }
    }
    return (this.EmptyMethod = true);
  }

  /**
   * If the target is not an object or an array, check if it is a string.
   * If it is, check if it is empty or only contains whitespace.
   * If it does, return true. If it doesn't, return false.
   */
  if (StringMethod.call(this, target)) {
    // @ts-ignore
    return (this.EmptyMethod = target.trim()[0] === undefined);
  }

  /**
   * If the target is not an object, an array, or a string, return false.
   */
  return false;
}
