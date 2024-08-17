import { isConfig } from '../config';

export function FunctionMethod<T extends typeof Function>(target: unknown): target is T {
  try {
    return (
      '[object Function]' === isConfig.state.toString.call(target) ||
      AsyncFunctionMethod(target) ||
      GeneratorFunctionMethod(target)
    );
  } catch (e) {
    if (e instanceof TypeError) {
      if ('Cannot create proxy with a non-object as target or handler' === e.message) {
        return true;
      }
    }
    return false;
  }
}

export function AsyncFunctionMethod(target: unknown): target is '[object AsyncFunction]' {
  try {
    return '[object AsyncFunction]' === isConfig.state.toString.call(target);
  } catch (e) {
    return false;
  }
}

export function GeneratorFunctionMethod(target: unknown): target is '[object Generator]' {
  try {
    return '[object Generator]' === isConfig.state.toString.call(target);
  } catch (e) {
    return false;
  }
}
