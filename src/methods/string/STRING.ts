export function STRING(target: unknown): target is string {
    return typeof target === 'string';
}

STRING.allowed = [];
STRING.originalName = 'string';
