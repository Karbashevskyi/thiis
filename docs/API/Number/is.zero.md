### is.zero(target: unknown)

- Target argument: **required**.
- Checks if the given "**target**" type is 0.

```typescript
is.zero(0) // true

is.zero(1) // false
is.zero(-1) // false
is.zero(BigInt(1)) // false
is.zero(BigInt(0)) // false
is.zero(1n) // false
is.zero(-31n) // false
is.zero(BigInt(2)) // false
is.zero('undefined') // false
is.zero('null') // false
is.zero(Symbol()) // false
is.zero(null) // false
is.zero(true) // false
is.zero([]) // false
is.zero(false) // false
is.zero("") // false
is.zero('') // false
is.zero(``) // false
is.zero({}) // false
is.zero(undefined) // false
is.zero(Function) // false
is.zero(() => {}) // false
is.zero(BigInt) // false
is.zero(Symbol) // false
is.zero(NaN) // false
is.zero(Infinity) // false
is.zero(-Infinity) // false
is.zero(Number.POSITIVE_INFINITY) // false
is.zero(Number.NEGATIVE_INFINITY) // false
// And all other known types will return false

// Reversal boolean result
is.not.zero(0) // false

is.not.zero(1) // true
is.not.zero(-1) // true
is.not.zero(BigInt(1)) // true
is.not.zero(BigInt(0)) // true
is.not.zero(1n) // true
is.not.zero(-31n) // true
is.not.zero(BigInt(2)) // true
is.not.zero('undefined') // true
is.not.zero('null') // true
is.not.zero(Symbol()) // true
is.not.zero(null) // true
is.not.zero(true) // true
is.not.zero([]) // true
is.not.zero(false) // true
is.not.zero("") // true
is.not.zero('') // true
is.not.zero(``) // true
is.not.zero({}) // true
is.not.zero(undefined) // true
is.not.zero(Function) // true
is.not.zero(() => {}) // true
is.not.zero(BigInt) // true
is.not.zero(Symbol) // true
is.not.zero(NaN) // true
is.not.zero(Infinity) // true
is.not.zero(-Infinity) // true
is.not.zero(Number.POSITIVE_INFINITY) // true
is.not.zero(Number.NEGATIVE_INFINITY) // true
// And all other known types will return true
```