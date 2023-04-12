export function PRIMITIVE(target: unknown): boolean {
  if (target === null) {
    return true;
  }

  if (typeof target === 'object' || typeof target === 'function') {
    return false;
  } else {
    return true;
  }
}
