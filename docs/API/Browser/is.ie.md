### is.ie(target: unknown)

- Target argument: **optional**.
- Return: boolean.

```typescript
is.ie() // true if the command is executed in the ie browser
is.ie('Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)') // true

// Alternative
isConfig.state.userAgent = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)';
is.ie() // true

// Recomendation
is.browser.ie();

is.ie(false) // false
is.ie(new Boolean(0)) // false
is.ie(new Boolean()) // false
is.ie(0) // false
is.ie('') // false
is.ie({}) // false
is.ie([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.ie() // false if the command is executed in the ie browser
is.not.ie('Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)') // false

// Alternative
isConfig.state.userAgent = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)';
is.not.ie() // false

// Recomendation
is.not.browser.ie();

is.not.ie(false) // true
is.not.ie(new Boolean(0)) // true
is.not.ie(new Boolean()) // true
is.not.ie(0) // true
is.not.ie('') // true
is.not.ie({}) // true
is.not.ie([]) // true
// And all other known types will return true
```
