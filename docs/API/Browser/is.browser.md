### is.browser(target: unknown)

- Target argument: **optional**.
- Return: boolean.

```typescript
is.browser() // true if the command is executed in the browser
is.browser(window.navigator) // Returns true if the navigator is not empty

// Alternative
IsConfig.state.navigator = window.navigator;
is.browser() // Returns true if the navigator is not empty

is.browser(false) // false
is.browser(new Boolean(0)) // false
is.browser(new Boolean()) // false
is.browser(0) // false
is.browser('') // false
is.browser({}) // false
is.browser([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.browser() // false if the command is executed in the browser
is.not.browser(window.navigator) // Returns false if the navigator is not empty

// Alternative
IsConfig.state.navigator = window.navigator;
is.not.browser() // Returns false if the navigator is not empty

is.not.browser(false) // true
is.not.browser(new Boolean(0)) // true
is.not.browser(new Boolean()) // true
is.not.browser(0) // true
is.not.browser('') // true
is.not.browser({}) // true
is.not.browser([]) // true
// And all other known types will return true
```