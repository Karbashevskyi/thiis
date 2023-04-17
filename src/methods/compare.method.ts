import { ArrayMethod } from './array.method';

export enum TypeOfValueEnum {
  object = 'object',
}

export function CompareMethod<T>(target: T, source: T): boolean {
  try {
    const keysOfTarget: string[] = Object.keys(target ?? {}) ?? [];
    const keysOfSource: string[] = Object.keys(source ?? {}) ?? [];

    if (!ArrayMethod.apply(this, [keysOfTarget]) || !ArrayMethod.apply(this, [keysOfSource])) {
      return false;
    }

    if (keysOfTarget.length !== keysOfSource.length) {
      return false;
    }

    if (!keysOfTarget.length && !keysOfSource.length) {
      return true;
    }

    for (const keyOfObjectTwo of keysOfSource) {
      switch (typeof (target as any)[keyOfObjectTwo]) {
        case TypeOfValueEnum.object:
          if (!CompareMethod.apply(this, [(target as any)[keyOfObjectTwo], (source as any)[keyOfObjectTwo]])) {
            return false;
          }
          break;
        default:
          if ((target as any)[keyOfObjectTwo] !== (source as any)[keyOfObjectTwo]) {
            return false;
          }
          break;
      }
    }
    return true;
  } catch (e) {
    return false;
  }
}
