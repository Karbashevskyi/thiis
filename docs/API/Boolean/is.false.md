### is.false(target: unknown)

- Target argument: **required**.
- Checks if the given "**target**" type is false.

```typescript
is.false(false) // true
is.false(new Boolean(0)) // true
is.false(new Boolean()) // true

is.false(true) // false
is.false(new Boolean(1)) // false
is.false(new Boolean(-1)) // false
is.false(0) // false
is.false('') // false
is.false({}) // false
is.false([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.false(false) // false
is.not.false(new Boolean(0)) // false
is.not.false(new Boolean()) // false

is.not.false(true) // true
is.not.false(new Boolean(1)) // true
is.not.false(new Boolean(-1)) // true
is.not.false(0) // true
is.not.false('') // true
is.not.false({}) // true
is.not.false([]) // true
// And all other known types will return true
```