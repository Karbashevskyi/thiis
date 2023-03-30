### is.odd(target: unknown)

- Target argument: **required**.
- Checks if the given "**target**" type is odd.

```typescript
is.odd(1) // true
is.odd(-1) // true
is.odd(BigInt(1)) // true
is.odd(1n) // true
is.odd(-31n) // true

is.odd(BigInt(2)) // true
is.odd(0) // false
is.odd('undefined') // false
is.odd('null') // false
is.odd(Symbol()) // false
is.odd(null) // false
is.odd(true) // false
is.odd([]) // false
is.odd(false) // false
is.odd("") // false
is.odd('') // false
is.odd(``) // false
is.odd({}) // false
is.odd(undefined) // false
is.odd(Function) // false
is.odd(() => {}) // false
is.odd(BigInt) // false
is.odd(Symbol) // false
is.odd(NaN) // false
is.odd(Infinity) // false
is.odd(-Infinity) // false
is.odd(Number.POSITIVE_INFINITY) // false
is.odd(Number.NEGATIVE_INFINITY) // false
// And all other known types will return false

// Reversal boolean result
is.not.odd(1) // false
is.not.odd(-1) // false
is.not.odd(BigInt(1)) // false
is.not.odd(1n) // false
is.not.odd(-31n) // false

is.not.odd(BigInt(2)) // true
is.not.odd(0) // true
is.not.odd('undefined') // true
is.not.odd('null') // true
is.not.odd(Symbol()) // true
is.not.odd(null) // true
is.not.odd(true) // true
is.not.odd([]) // true
is.not.odd(false) // true
is.not.odd("") // true
is.not.odd('') // true
is.not.odd(``) // true
is.not.odd({}) // true
is.not.odd(undefined) // true
is.not.odd(Function) // true
is.not.odd(() => {}) // true
is.not.odd(BigInt) // true
is.not.odd(Symbol) // true
is.not.odd(NaN) // true
is.not.odd(Infinity) // true
is.not.odd(-Infinity) // true
is.not.odd(Number.POSITIVE_INFINITY) // true
is.not.odd(Number.NEGATIVE_INFINITY) // true
// And all other known types will return true
```