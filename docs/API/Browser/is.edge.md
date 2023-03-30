### is.edge(target: unknown)

- Target argument: **optional**.
- Return: boolean.

```typescript
is.edge() // true if the command is executed in the edge browser
is.edge('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 Edg/93.0.961.38') // true

// Alternative
isConfig.state.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 Edg/93.0.961.38';
is.edge() // true

// Recomendation
is.browser.edge();

is.edge(false) // false
is.edge(new Boolean(0)) // false
is.edge(new Boolean()) // false
is.edge(0) // false
is.edge('') // false
is.edge({}) // false
is.edge([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.edge() // false if the command is executed in the edge browser
is.not.edge('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 Edg/93.0.961.38') // false

// Alternative
isConfig.state.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 Edg/93.0.961.38';
is.not.edge() // false

// Recomendation
is.not.browser.edge();

is.not.edge(false) // false
is.not.edge(new Boolean(0)) // false
is.not.edge(new Boolean()) // false
is.not.edge(0) // false
is.not.edge('') // false
is.not.edge({}) // false
is.not.edge([]) // false
// And all other known types will return true
```
