### is.firefox(target: unknown)

- Target argument: **optional**.
- Return: boolean.

```typescript
is.firefox() // true if the command is executed in the firefox browser
is.firefox('Mozilla/5.0 (Android; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0') // true

// Alternative
isConfig.state.userAgent = 'Mozilla/5.0 (Android; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0';
is.firefox() // true

// Recomendation
is.browser.firefox();

is.firefox(false) // false
is.firefox(new Boolean(0)) // false
is.firefox(new Boolean()) // false
is.firefox(0) // false
is.firefox('') // false
is.firefox({}) // false
is.firefox([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.firefox() // false if the command is executed in the firefox browser
is.not.firefox('Mozilla/5.0 (Android; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0') // false

// Alternative
isConfig.state.userAgent = 'Mozilla/5.0 (Android; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0';
is.not.firefox() // false

// Recomendation
is.not.browser.firefox();

is.not.firefox(false) // true
is.not.firefox(new Boolean(0)) // true
is.not.firefox(new Boolean()) // true
is.not.firefox(0) // true
is.not.firefox('') // true
is.not.firefox({}) // true
is.not.firefox([]) // true
// And all other known types will return true
```
