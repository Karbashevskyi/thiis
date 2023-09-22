export function OBJECT<T extends object>(target: unknown): target is T {
    return Object.prototype.toString.call(target) === '[object Object]';
}

OBJECT.allowed = [];
OBJECT.originalName = 'object';
