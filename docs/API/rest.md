## Rest

### is.array(target: unknown)

- Target argument: **required**.
- Checks if the given "**target**" type is array.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.compare(target: [object Object], source: [object Object])

- Target and source arguments: **required**.
- Checks if the given "**target**" and "**source**" is compare.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.empty(target: Map | Array | String | Object | Set)

- Target argument: **required**.
- Checks if the given "**target**" type is empty.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.function(target: Function | AsyncFunction | GeneratorFunction)

- Target argument: **required**.
- Checks if the given "**target**" type is function.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.instanceOf(target: unknown, classRef: Function)

- Target and classRef arguments: **required**.
- Checks if the given "**target**" type instance of **classRef**.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.len(target: String | Array, ...rest)

- Target argument: **required**.
- Checks if the given "**target**" is true by rest, rest is "configList" you can configure manually or automatically through the method name as shown in the example.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.null(target: unknown)

- Target argument: **required**.
- Checks if the given "**target**" type is null.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.object(target: Object)

- Target argument: **required**.
- Checks if the given "**target**" type is object.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.primitive(target: unknown)

- Target argument: **required**.
- Checks if the given "**target**" type is primitive.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.promise(target: unknown)

- Target argument: **required**.
- Checks if the given "**target**" type is promise.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.symbol(target: unknown)

- Target argument: **required**.
- Checks if the given "**target**" type is symbol.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.undefined(target: unknown)

- Target argument: **required**.
- Checks if the given "**target**" type is undefined.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```
