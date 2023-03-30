### is.windowsPhone(target: unknown)

- Target argument: **optional**.
- Return: boolean.

```typescript
is.windowsPhone() // true if the command is executed in a browser running on the windows phone
is.windowsPhone('Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 635) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537') // true

// Alternative
IsConfig.state.userAgent = 'Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 635) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537';
is.windowsPhone() // true

is.windowsPhone(769) // false
is.windowsPhone(false) // false
is.windowsPhone(new Boolean(0)) // false
is.windowsPhone(new Boolean()) // false
is.windowsPhone(0) // false
is.windowsPhone('') // false
is.windowsPhone({}) // false
is.windowsPhone([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.windowsPhone() // false if the command is executed in a browser running on the iPhone
is.not.windowsPhone('Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1') // false

// Alternative
IsConfig.state.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1';
is.not.windowsPhone() // false

is.not.windowsPhone(769) // true
is.not.windowsPhone(false) // true
is.not.windowsPhone(new Boolean(0)) // true
is.not.windowsPhone(new Boolean()) // true
is.not.windowsPhone(0) // true
is.not.windowsPhone('') // true
is.not.windowsPhone({}) // true
is.not.windowsPhone([]) // true
// And all other known types will return true
```
