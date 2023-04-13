export function UNDEFINED(target: unknown): target is undefined {
    return target === undefined;
}

UNDEFINED.allowed = [];
UNDEFINED.originalName = 'undefined';
