### is.iphone(target: unknown)

- Target argument: **optional**.
- Return: boolean.

```typescript
is.iphone() // true if the command is executed in a browser running on the iPhone
is.iphone('Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1') // true

// Alternative
IsConfig.state.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1';
is.iphone() // true

is.iphone(769) // false
is.iphone(false) // false
is.iphone(new Boolean(0)) // false
is.iphone(new Boolean()) // false
is.iphone(0) // false
is.iphone('') // false
is.iphone({}) // false
is.iphone([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.iphone() // false if the command is executed in a browser running on the iPhone
is.not.iphone('Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1') // false

// Alternative
IsConfig.state.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1';
is.not.iphone() // false

is.not.iphone(769) // true
is.not.iphone(false) // true
is.not.iphone(new Boolean(0)) // true
is.not.iphone(new Boolean()) // true
is.not.iphone(0) // true
is.not.iphone('') // true
is.not.iphone({}) // true
is.not.iphone([]) // true
// And all other known types will return true
```
