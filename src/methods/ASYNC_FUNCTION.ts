export function ASYNC_FUNCTION(target: unknown): target is '[object AsyncFunction]' {
  try {
    return Object.prototype.toString.call(target) === '[object AsyncFunction]';
  } catch (e) {
    return false;
  }
}
