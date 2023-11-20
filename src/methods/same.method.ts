import {ArrayMethod} from './array.method';

export enum TypeOfValueEnum {
  object = 'object',
}

export function SameMethod<T>(target: T, source: T): boolean {

  if (this.SameMethod) {
    return true;
  }

  try {

    const keysOfTarget: string[] = Object.keys(target ?? {}) ?? [];
    const keysOfSource: string[] = Object.keys(source ?? {}) ?? [];

    if (!ArrayMethod.call(this, keysOfTarget) || !ArrayMethod.call(this, keysOfSource)) {
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
          if (!SameMethod.call(this, (target as any)[keyOfObjectTwo], (source as any)[keyOfObjectTwo])) {
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
    return this.SameMethod = true;
  } catch (e) {
    return false;
  }
}
