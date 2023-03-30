### is.safari(target: unknown)

- Target argument: **optional**.
- Return: boolean.

```typescript
is.safari() // true if the command is executed in the safari browser
is.safari('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36') // true

// Alternative
isConfig.state.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36';
is.safari() // true


// Recomendation
is.browser.safari();

is.safari(false) // false
is.safari(new Boolean(0)) // false
is.safari(new Boolean()) // false
is.safari(0) // false
is.safari('') // false
is.safari({}) // false
is.safari([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.safari() // false if the command is executed in the safari browser
is.not.safari('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36') // false

// Alternative
isConfig.state.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36';
is.not.safari() // false


// Recomendation
is.not.browser.safari();

is.not.safari(false) // true
is.not.safari(new Boolean(0)) // true
is.not.safari(new Boolean()) // true
is.not.safari(0) // true
is.not.safari('') // true
is.not.safari({}) // true
is.not.safari([]) // true
// And all other known types will return true
```
