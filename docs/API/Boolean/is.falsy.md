### is.falsy(target: unknown)

- Target argument: **required**.
- Checks if the given "**target**" type is false.

```typescript
is.falsy(false) // true
is.falsy(new Boolean(0)) // true
is.falsy(new Boolean()) // true
is.falsy(null) // true
is.falsy(undefined) // true
is.falsy(0) // true
is.falsy(-0) // true
is.falsy(NaN) // true
is.falsy("") // true
is.falsy('') // true
is.falsy(``) // true

is.falsy(true) // false
is.falsy(new Boolean(1)) // false
is.falsy(new Boolean(-1)) // false
is.falsy({}) // false
is.falsy([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.falsy(false) // false
is.not.falsy(new Boolean(0)) // false
is.not.falsy(new Boolean()) // false
is.not.falsy(null) // false
is.not.falsy(undefined) // false
is.not.falsy(0) // false
is.not.falsy(-0) // false
is.not.falsy(NaN) // false
is.not.falsy("") // false
is.not.falsy('') // false
is.not.falsy(``) // false

is.not.falsy(true) // true
is.not.falsy(new Boolean(1)) // true
is.not.falsy(new Boolean(-1)) // true
is.not.falsy({}) // true
is.not.falsy([]) // true
// And all other known types will return true
```
