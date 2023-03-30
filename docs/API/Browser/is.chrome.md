### is.chrome(target: unknown)

- Target argument: **optional**.
- Return: boolean.

```typescript
is.chrome() // true if the command is executed in the chrome browser
is.chrome('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36', 'Google Inc.') // true

// Alternative
isConfig.state.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36';
isConfig.state.vendor = 'Google Inc.';
is.chrome() // true

// Recomendation
is.browser.chrome();

is.chrome(false) // false
is.chrome(new Boolean(0)) // false
is.chrome(new Boolean()) // false
is.chrome(0) // false
is.chrome('') // false
is.chrome({}) // false
is.chrome([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.chrome() // false if the command is executed in the chrome browser
is.not.chrome('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 Edg/93.0.961.38', 'Google Inc.') // false

// Alternative
isConfig.state.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36';
isConfig.state.vendor = 'Google Inc.';
is.not.chrome() // false

// Recomendation
is.not.browser.chrome();

is.not.chrome(false) // false
is.not.chrome(new Boolean(0)) // false
is.not.chrome(new Boolean()) // false
is.not.chrome(0) // false
is.not.chrome('') // false
is.not.chrome({}) // false
is.not.chrome([]) // false
// And all other known types will return true
```