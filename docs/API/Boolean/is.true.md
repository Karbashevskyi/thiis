### is.true(target: unknown)

- Target argument: **required**.
- Checks if the given "**target**" type is true.

```typescript
is.true(true) // true
is.true(new Boolean(1)) // true
is.true(new Boolean(-1)) // true

is.true(false) // false
is.true(new Boolean(0)) // false
is.true(new Boolean()) // false
is.true(0) // false
is.true('') // false
is.true({}) // false
is.true([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.true(true) // false
is.not.true(new Boolean(1)) // false
is.not.true(new Boolean(-1)) // false

is.not.true(false) // true
is.not.true(new Boolean(0)) // true
is.not.true(new Boolean()) // true
is.not.true(0) // true
is.not.true('') // true
is.not.true({}) // true
is.not.true([]) // true
// And all other known types will return true
```
