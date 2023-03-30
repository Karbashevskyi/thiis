### is.int(target: unknown)

- Target argument: **required**.
- Checks if the given "**target**" type is integer.

```typescript
is.int(123) // true
is.int(0) // true

is.int(123.123) // false
is.int('0') // false
is.int('-0') // false
is.int('+0') // false
is.int('-2') // false
is.int('+2') // false
is.int('2') // false
is.int(4n) // false
is.int(-3n) // false
is.int('2n') // false
is.int('-5n') // false
is.int(BigInt(1)) // false
is.int('undefined') // false
is.int('null') // false
is.int(Symbol()) // false
is.int(null) // false
is.int(true) // false
is.int([]) // false
is.int(false) // false
is.int("") // false
is.int('') // false
is.int(``) // false
is.int({}) // false
is.int(undefined) // false
is.int(Function) // false
is.int(() => {}) // false
is.int(BigInt) // false
is.int(Symbol) // false
is.int(NaN) // false
is.int(Infinity) // false
is.int(-Infinity) // false
is.int(Number.POSITIVE_INFINITY) // false
is.int(Number.NEGATIVE_INFINITY) // false
// And all other known types will return false

// Reversal boolean result
is.not.int(123) // false
is.not.int(0) // false

is.not.int(123.123) // true
is.not.int('0') // true
is.not.int('-0') // true
is.not.int('+0') // true
is.not.int('-2') // true
is.not.int('+2') // true
is.not.int('2') // true
is.not.int(4n) // true
is.not.int(-3n) // true
is.not.int('2n') // true
is.not.int('-5n') // true
is.not.int(BigInt(1)) // true
is.not.int('undefined') // true
is.not.int('null') // true
is.not.int(Symbol()) // true
is.not.int(null) // true
is.not.int(true) // true
is.not.int([]) // true
is.not.int(false) // true
is.not.int("") // true
is.not.int('') // true
is.not.int(``) // true
is.not.int({}) // true
is.not.int(undefined) // true
is.not.int(Function) // true
is.not.int(() => {}) // true
is.not.int(BigInt) // true
is.not.int(Symbol) // true
is.not.int(NaN) // true
is.not.int(Infinity) // true
is.not.int(-Infinity) // true
is.not.int(Number.POSITIVE_INFINITY) // true
is.not.int(Number.NEGATIVE_INFINITY) // true
// And all other known types will return true
```
