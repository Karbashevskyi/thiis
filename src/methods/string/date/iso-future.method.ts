/**
 * Put a date in ISO format and check if it is in the future.
 * Don't put Symbol() in the parameter.
 * You can use combination "is.isoFuture_not_symbol()" to check if parameter is not a symbol.
 */
export function IsoFutureMethod(iso: string): boolean {
    return Date.parse(iso) > Date.now();
}
