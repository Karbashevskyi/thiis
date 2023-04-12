export function GENERATOR_FUNCTION(target: unknown): target is '[object Generator]' {
    try {
        return Object.prototype.toString.call(target) === '[object Generator]';
    } catch (e) {
        return false;
    }
}
