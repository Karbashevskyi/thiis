import { isConfig } from '../config';

export function FunctionMethod<T extends typeof Function>(target: unknown): target is T {
  try {
    return (
      isConfig.state.toString.call(target) === '[object Function]' ||
      AsyncFunctionMethod(target) ||
      GeneratorFunctionMethod(target)
    );
  } catch (e) {
    if (e instanceof TypeError) {
      if (e.message === 'Cannot create proxy with a non-object as target or handler') {
        return true;
      }
    }
    return false;
  }
}

export function AsyncFunctionMethod(target: unknown): target is '[object AsyncFunction]' {
  try {
    return isConfig.state.toString.call(target) === '[object AsyncFunction]';
  } catch (e) {
    return false;
  }
}

export function GeneratorFunctionMethod(target: unknown): target is '[object Generator]' {
  try {
    return isConfig.state.toString.call(target) === '[object Generator]';
  } catch (e) {
    return false;
  }
}
