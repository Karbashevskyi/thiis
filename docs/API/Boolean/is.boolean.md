### is.boolean(target: unknown)

- Target argument: **required**.
- Checks if the given "**target**" type is boolean.

```typescript
is.boolean(true) // true
is.boolean(false) // true
is.boolean(new Boolean()) // true
is.boolean(new Boolean(0)) // true
is.boolean(new Boolean(1)) // true

is.boolean(0) // false
is.boolean('') // false
is.boolean({}) // false
is.boolean([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.boolean(true) // false
is.not.boolean(false) // false
is.not.boolean(new Boolean()) // false
is.not.boolean(new Boolean(0)) // false
is.not.boolean(new Boolean(1)) // false

is.not.boolean(0) // true
is.not.boolean('') // true
is.not.boolean({}) // true
is.not.boolean([]) // true
// And all other known types will return true
```
