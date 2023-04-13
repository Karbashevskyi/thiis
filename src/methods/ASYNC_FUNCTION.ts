import {not} from './not';
import {or} from './or';

export function ASYNC_FUNCTION(target: unknown): target is '[object AsyncFunction]' {
  try {
    return Object.prototype.toString.call(target) === '[object AsyncFunction]';
  } catch (e) {
    return false;
  }
}

ASYNC_FUNCTION.allowed = [];
ASYNC_FUNCTION.originalName = 'asyncFunction';
