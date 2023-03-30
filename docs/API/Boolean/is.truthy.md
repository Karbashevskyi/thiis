### is.truthy(target: unknown)

- Target argument: **required**.
- Checks if the given "**target**" type is true.

```typescript
is.truthy([]) // true
is.truthy('undefined') // true
is.truthy('null') // true
is.truthy(Symbol()) // true
is.truthy(true) // true
is.truthy(BigInt(1)) // true
is.truthy({}) // true
is.truthy(Function) // true
is.truthy(() => {}) // true
is.truthy(Bigint) // true
is.truthy(Symbol) // true
is.truthy(new Boolean(1)) // true
is.truthy(new Boolean(-1)) // true

is.truthy(false) // false
is.truthy(new Boolean(0)) // false
is.truthy(new Boolean()) // false
is.truthy(0) // false
is.truthy('') // false
is.truthy({}) // false
is.truthy([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.truthy([]) // false
is.not.truthy('undefined') // false
is.not.truthy('null') // false
is.not.truthy(Symbol()) // false
is.not.truthy(true) // false
is.not.truthy(BigInt(1)) // false
is.not.truthy({}) // false
is.not.truthy(Function) // false
is.not.truthy(() => {}) // false
is.not.truthy(Bigint) // false
is.not.truthy(Symbol) // false
is.not.truthy(new Boolean(1)) // false
is.not.truthy(new Boolean(-1)) // false

is.not.truthy(false) // true
is.not.truthy(new Boolean(0)) // true
is.not.truthy(new Boolean()) // true
is.not.truthy(0) // true
is.not.truthy('') // true
is.not.truthy({}) // true
is.not.truthy([]) // true
// And all other known types will return true
```
