### is.even(target: unknown)

- Target argument: **required**.
- Checks if the given "**target**" type is even.

```typescript
is.even(0) // true
is.even(2) // true
is.even(-2) // true
is.even(BigInt(2)) // true
is.even(2n) // true
is.even(-32n) // true

is.even(BigInt(1)) // true
is.even(1) // false
is.even(-1) // false
is.even('undefined') // false
is.even('null') // false
is.even(Symbol()) // false
is.even(null) // false
is.even(true) // false
is.even([]) // false
is.even(false) // false
is.even("") // false
is.even('') // false
is.even(``) // false
is.even({}) // false
is.even(undefined) // false
is.even(Function) // false
is.even(() => {}) // false
is.even(BigInt) // false
is.even(Symbol) // false
is.even(NaN) // false
is.even(Infinity) // false
is.even(-Infinity) // false
is.even(Number.POSITIVE_INFINITY) // false
is.even(Number.NEGATIVE_INFINITY) // false
// And all other known types will return false

// Reversal boolean result
is.not.even(0) // false
is.not.even(2) // false
is.not.even(-2) // false
is.not.even(BigInt(2)) // false
is.not.even(2n) // false
is.not.even(-32n) // false

is.not.even(BigInt(1)) // true
is.not.even(1) // true
is.not.even(-1) // true
is.not.even('undefined') // true
is.not.even('null') // true
is.not.even(Symbol()) // true
is.not.even(null) // true
is.not.even(true) // true
is.not.even([]) // true
is.not.even(false) // true
is.not.even("") // true
is.not.even('') // true
is.not.even(``) // true
is.not.even({}) // true
is.not.even(undefined) // true
is.not.even(Function) // true
is.not.even(() => {}) // true
is.not.even(BigInt) // true
is.not.even(Symbol) // true
is.not.even(NaN) // true
is.not.even(Infinity) // true
is.not.even(-Infinity) // true
is.not.even(Number.POSITIVE_INFINITY) // true
is.not.even(Number.NEGATIVE_INFINITY) // true
// And all other known types will return true
```
