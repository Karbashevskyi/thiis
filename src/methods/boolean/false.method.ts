export function FalseMethod(target: unknown): target is false {
    if (this.FalseMethod) {
        return true;
    }
    return this.FalseMethod = target === false;
}
