const toString: typeof Object.prototype.toString = Object.prototype.toString;

export function FunctionMethod<T extends typeof Function>(target: unknown): target is T {
  try {
    return (
      toString.call(target) === '[object Function]' || AsyncFunctionMethod.apply(this, [target]) || GeneratorFunctionMethod.apply(this, [target])
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
    return toString.call(target) === '[object AsyncFunction]';
  } catch (e) {
    return false;
  }
}

export function GeneratorFunctionMethod(target: unknown): target is '[object Generator]' {
  try {
    return toString.call(target) === '[object Generator]';
  } catch (e) {
    return false;
  }
}
