### is.opera(target: unknown)

- Target argument: **optional**.
- Return: boolean.

```typescript
is.opera() // true if the command is executed in the opera browser
is.opera('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 OPR/74.0.3911.218') // true

// Alternative
isConfig.state.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 OPR/74.0.3911.218';
is.opera() // true

// Recomendation
is.browser.opera();

is.opera(false) // false
is.opera(new Boolean(0)) // false
is.opera(new Boolean()) // false
is.opera(0) // false
is.opera('') // false
is.opera({}) // false
is.opera([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.opera() // false if the command is executed in the opera browser
is.not.opera('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 OPR/74.0.3911.218') // false

// Alternative
isConfig.state.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 OPR/74.0.3911.218';
is.not.opera() // false

// Recomendation
is.not.browser.opera();

is.not.opera(false) // true
is.not.opera(new Boolean(0)) // true
is.not.opera(new Boolean()) // true
is.not.opera(0) // true
is.not.opera('') // true
is.not.opera({}) // true
is.not.opera([]) // true
// And all other known types will return true
```
