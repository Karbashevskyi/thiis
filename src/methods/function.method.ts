import { isConfig } from '../config';

export function FunctionMethod<T extends typeof Function>(target: unknown): target is T {
  if (this.FunctionMethod) {
    return true;
  }
  try {
    return (this.FunctionMethod =
      isConfig.state.toString.call(target) === '[object Function]' ||
      AsyncFunctionMethod.call(this, target) ||
      GeneratorFunctionMethod.call(this, target));
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
  if (this.AsyncFunctionMethod) {
    return true;
  }
  try {
    return (this.AsyncFunctionMethod = isConfig.state.toString.call(target) === '[object AsyncFunction]');
  } catch (e) {
    return false;
  }
}

export function GeneratorFunctionMethod(target: unknown): target is '[object Generator]' {
  if (this.GeneratorFunctionMethod) {
    return true;
  }
  try {
    return (this.GeneratorFunctionMethod = isConfig.state.toString.call(target) === '[object Generator]');
  } catch (e) {
    return false;
  }
}
