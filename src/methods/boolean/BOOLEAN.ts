export function BOOLEAN(target: unknown): target is boolean {
    return typeof target === 'boolean';
}

BOOLEAN.allowed = [];
BOOLEAN.originalName = 'boolean';
