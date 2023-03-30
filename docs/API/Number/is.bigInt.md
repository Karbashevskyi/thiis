### is.bigInt(target: unknown)

- Target argument: **required**.
- Checks if the given "**target**" type is BigInt.

```typescript
is.bigInt(BigInt(1)) // true

is.bigInt(0) // false
is.bigInt(1) // false
is.bigInt(-1) // false
is.bigInt('undefined') // false
is.bigInt('null') // false
is.bigInt(Symbol()) // false
is.bigInt(null) // false
is.bigInt(true) // false
is.bigInt([]) // false
is.bigInt(false) // false
is.bigInt("") // false
is.bigInt('') // false
is.bigInt(``) // false
is.bigInt({}) // false
is.bigInt(undefined) // false
is.bigInt(Function) // false
is.bigInt(() => {}) // false
is.bigInt(BigInt) // false
is.bigInt(Symbol) // false
is.bigInt(NaN) // false
is.bigInt(Infinity) // false
is.bigInt(-Infinity) // false
is.bigInt(Number.POSITIVE_INFINITY) // false
is.bigInt(Number.NEGATIVE_INFINITY) // false
// And all other known types will return false

// Reversal boolean result

is.not.bigInt(BigInt(1)) // false

is.not.bigInt(0) // true
is.not.bigInt(1) // true
is.not.bigInt(-1) // true
is.not.bigInt('undefined') // true
is.not.bigInt('null') // true
is.not.bigInt(Symbol()) // true
is.not.bigInt(null) // true
is.not.bigInt(true) // true
is.not.bigInt([]) // true
is.not.bigInt(false) // true
is.not.bigInt("") // true
is.not.bigInt('') // true
is.not.bigInt(``) // true
is.not.bigInt({}) // true
is.not.bigInt(undefined) // true
is.not.bigInt(Function) // true
is.not.bigInt(() => {}) // true
is.not.bigInt(BigInt) // true
is.not.bigInt(Symbol) // true
is.not.bigInt(NaN) // true
is.not.bigInt(Infinity) // true
is.not.bigInt(-Infinity) // true
is.not.bigInt(Number.POSITIVE_INFINITY) // true
is.not.bigInt(Number.NEGATIVE_INFINITY) // true
// And all other known types will return true
```
