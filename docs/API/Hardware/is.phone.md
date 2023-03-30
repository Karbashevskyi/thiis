### is.phone(target: unknown)

- Target argument: **optional**.
- Return: boolean.

```typescript
is.phone() // true if the command is executed in the browser with screenWidth <= 768
is.phone(768) // true

// Alternative
IsConfig.state.screen.width = 768;
is.phone() // true

is.phone(769) // false
is.phone(false) // false
is.phone(new Boolean(0)) // false
is.phone(new Boolean()) // false
is.phone(0) // false
is.phone('') // false
is.phone({}) // false
is.phone([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.phone() // false if the command is executed in the browser with screenWidth <= 768
is.not.phone(768) // false

// Alternative
IsConfig.state.screen.width = 768;
is.not.phone() // false

is.not.phone(769) // true
is.not.phone(false) // true
is.not.phone(new Boolean(0)) // true
is.not.phone(new Boolean()) // true
is.not.phone(0) // true
is.not.phone('') // true
is.not.phone({}) // true
is.not.phone([]) // true
// And all other known types will return true
```
