### is.ipad(target: unknown)

- Target argument: **optional**.
- Return: boolean.

```typescript
is.ipad() // true if the command is executed in a browser running on the iPad
is.ipad('Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/88.0.4324.104 Mobile/15E148 Safari/604.1') // true

// Alternative
IsConfig.state.userAgent = 'Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/88.0.4324.104 Mobile/15E148 Safari/604.1';
is.ipad() // true

is.ipad(769) // false
is.ipad(false) // false
is.ipad(new Boolean(0)) // false
is.ipad(new Boolean()) // false
is.ipad(0) // false
is.ipad('') // false
is.ipad({}) // false
is.ipad([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.ipad() // false if the command is executed in a browser running on the iPad
is.not.ipad('Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/88.0.4324.104 Mobile/15E148 Safari/604.1') // false

// Alternative
IsConfig.state.userAgent = 'Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/88.0.4324.104 Mobile/15E148 Safari/604.1';
is.not.ipad() // false

is.ipad(769) // true
is.ipad(false) // true
is.ipad(new Boolean(0)) // true
is.ipad(new Boolean()) // true
is.ipad(0) // true
is.ipad('') // true
is.ipad({}) // true
is.ipad([]) // true
// And all other known types will return true
```
