### is.ipod(target: unknown)

- Target argument: **optional**.
- Return: boolean.

```typescript
is.ipod() // true if the command is executed in a browser running on the iPod
is.ipod('Mozilla/5.0 (iPod; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1') // true

// Alternative
IsConfig.state.userAgent = 'Mozilla/5.0 (iPod; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1';
is.ipod() // true

is.ipod(769) // false
is.ipod(false) // false
is.ipod(new Boolean(0)) // false
is.ipod(new Boolean()) // false
is.ipod(0) // false
is.ipod('') // false
is.ipod({}) // false
is.ipod([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.ipod() // false if the command is executed in a browser running on the iPod
is.not.ipod('Mozilla/5.0 (iPod; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1') // false

// Alternative
IsConfig.state.userAgent = 'Mozilla/5.0 (iPod; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1';
is.not.ipod() // false

is.not.ipod(769) // true
is.not.ipod(false) // true
is.not.ipod(new Boolean(0)) // true
is.not.ipod(new Boolean()) // true
is.not.ipod(0) // true
is.not.ipod('') // true
is.not.ipod({}) // true
is.not.ipod([]) // true
// And all other known types will return true
```
