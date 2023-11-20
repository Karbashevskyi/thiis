export function FalsyMethod(target: unknown): target is false {
    if (this.FalsyMethod) {
        return true;
    }
    return this.FalsyMethod = !target;
}
