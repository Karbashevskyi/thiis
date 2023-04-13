export function NULL(target: unknown): target is null {
    return target === null;
}


NULL.allowed = [];
NULL.originalName = 'null';
