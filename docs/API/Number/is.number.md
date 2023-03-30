### is.number(target: unknown)

- Target argument: **required**.
- Checks if the given "**target**" type is number.

```typescript
is.number(0) // true
is.number(1) // true
is.number(-1) // true

is.number('undefined') // false
is.number('null') // false
is.number(Symbol()) // false
is.number(null) // false
is.number(true) // false
is.number(BigInt(1)) // false
is.number([]) // false
is.number(false) // false
is.number("") // false
is.number('') // false
is.number(``) // false
is.number({}) // false
is.number(undefined) // false
is.number(Function) // false
is.number(() => {}) // false
is.number(BigInt) // false
is.number(Symbol) // false
is.number(NaN) // false
is.number(Infinity) // false
is.number(-Infinity) // false
is.number(Number.POSITIVE_INFINITY) // false
is.number(Number.NEGATIVE_INFINITY) // false
// And all other known types will return false

// Reversal boolean result
is.not.number(0) // false
is.not.number(1) // false
is.not.number(-1) // false

is.not.number('undefined') // true
is.not.number('null') // true
is.not.number(Symbol()) // true
is.not.number(null) // true
is.not.number(true) // true
is.not.number(BigInt(1)) // true
is.not.number([]) // true
is.not.number(false) // true
is.not.number("") // true
is.not.number('') // true
is.not.number(``) // true
is.not.number({}) // true
is.not.number(undefined) // true
is.not.number(Function) // true
is.not.number(() => {}) // true
is.not.number(BigInt) // true
is.not.number(Symbol) // true
is.not.number(NaN) // true
is.not.number(Infinity) // true
is.not.number(-Infinity) // true
is.not.number(Number.POSITIVE_INFINITY) // true
is.not.number(Number.NEGATIVE_INFINITY) // true
// And all other known types will return true
```
