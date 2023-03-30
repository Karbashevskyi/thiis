![NPM Latest Version](https://img.shields.io/npm/v/thiis)

# Introduction

## Why you should use and support the package:
1. ✅ Typification.
2. ✅ Reducing the code in the project.
3. ✅ Easier to read and understand the code.
4. ✅ CDN support.
5. ✅ Compatible with ECMAScript 2015.
6. ✅ Compatible with the oldest version of TypeScript (0.8.0).
7. ✅ Maintenance of global contexts: globalThis, window, self, global.
8. ✅ No dependencies
9. ✅ AMD, Node & browser ready
10. ✅ Small size: ~8KB.

# 💡 Idea

this package was created in order to simplify writing in typescript / javascript, it often happens that you need to have
checks for different types of data, these checks can be "huge", but if you could simply describe in words what we want
to check?

For example, why write:

```typescript
if (typeof variable === 'object' && variable !== null && !Array.isArray(variable) && Object.keys(variable)?.length) {
}
```

if you can write something like:

```typescript
if (is.object.not.empty(variable)) {
}
```

# 📝 Table of contents

- [thiis](#thiis)
    - [Idea](#-idea)
    - [Introduction](#introduction)
    - [Table of contents](#-table-of-contents)
    - [Installation](#-installation)
    - [CDN](#-cdn)
    - [Import](#-import)
    - [API](#-api)
      - TODO
    - [Additional](#-additional)
    - [Contributing](#-contributing)
    - [Authors](#-authors)
    - [License](#-license)

# 💿 Installation

```bash
npm install thiis
```

# 🔗 CDN

```html
<script>
  var exports = {};
</script>
<script src="//unpkg.com/thiis@1.0.0/dist/index.js"></script>
<script>
  const { is } = exports;
  console.log(is.string('')); // true
</script>
```

[Back to table of contents](#-table-of-contents)

# 🙌 Import

```bash
import {is} from "thiis";
```

# 🗃 API

## Boolean

### is.boolean(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is boolean.

```typescript
is.boolean(true) // true
is.boolean(false) // true
is.boolean(new Boolean()) // true
is.boolean(new Boolean(0)) // true
is.boolean(new Boolean(1)) // true

is.boolean(0) // false
is.boolean('') // false
is.boolean({}) // false
is.boolean([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.boolean(true) // false
is.not.boolean(false) // false
is.not.boolean(new Boolean()) // false
is.not.boolean(new Boolean(0)) // false
is.not.boolean(new Boolean(1)) // false

is.not.boolean(0) // true
is.not.boolean('') // true
is.not.boolean({}) // true
is.not.boolean([]) // true
// And all other known types will return true
```

### is.false(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is false.

```typescript
is.false(false) // true
is.false(new Boolean(0)) // true
is.false(new Boolean()) // true

is.false(true) // false
is.false(new Boolean(1)) // false
is.false(new Boolean(-1)) // false
is.false(0) // false
is.false('') // false
is.false({}) // false
is.false([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.false(false) // false
is.not.false(new Boolean(0)) // false
is.not.false(new Boolean()) // false

is.not.false(true) // true
is.not.false(new Boolean(1)) // true
is.not.false(new Boolean(-1)) // true
is.not.false(0) // true
is.not.false('') // true
is.not.false({}) // true
is.not.false([]) // true
// And all other known types will return true
```

### is.falsy(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is false.

```typescript
is.falsy(false) // true
is.falsy(new Boolean(0)) // true
is.falsy(new Boolean()) // true
is.falsy(null) // true
is.falsy(undefined) // true
is.falsy(0) // true
is.falsy(-0) // true
is.falsy(NaN) // true
is.falsy("") // true
is.falsy('') // true
is.falsy(``) // true

is.falsy(true) // false
is.falsy(new Boolean(1)) // false
is.falsy(new Boolean(-1)) // false
is.falsy({}) // false
is.falsy([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.falsy(false) // false
is.not.falsy(new Boolean(0)) // false
is.not.falsy(new Boolean()) // false
is.not.falsy(null) // false
is.not.falsy(undefined) // false
is.not.falsy(0) // false
is.not.falsy(-0) // false
is.not.falsy(NaN) // false
is.not.falsy("") // false
is.not.falsy('') // false
is.not.falsy(``) // false

is.not.falsy(true) // true
is.not.falsy(new Boolean(1)) // true
is.not.falsy(new Boolean(-1)) // true
is.not.falsy({}) // true
is.not.falsy([]) // true
// And all other known types will return true
```

### is.true(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is true.

```typescript
is.true(true) // true
is.true(new Boolean(1)) // true
is.true(new Boolean(-1)) // true

is.true(false) // false
is.true(new Boolean(0)) // false
is.true(new Boolean()) // false
is.true(0) // false
is.true('') // false
is.true({}) // false
is.true([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.true(true) // false
is.not.true(new Boolean(1)) // false
is.not.true(new Boolean(-1)) // false

is.not.true(false) // true
is.not.true(new Boolean(0)) // true
is.not.true(new Boolean()) // true
is.not.true(0) // true
is.not.true('') // true
is.not.true({}) // true
is.not.true([]) // true
// And all other known types will return true
```

### is.truthy(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is true.

```typescript
is.truthy([]) // true
is.truthy('undefined') // true
is.truthy('null') // true
is.truthy(Symbol()) // true
is.truthy(true) // true
is.truthy(BigInt(1)) // true
is.truthy({}) // true
is.truthy(Function) // true
is.truthy(() => {}) // true
is.truthy(Bigint) // true
is.truthy(Symbol) // true
is.truthy(new Boolean(1)) // true
is.truthy(new Boolean(-1)) // true

is.truthy(false) // false
is.truthy(new Boolean(0)) // false
is.truthy(new Boolean()) // false
is.truthy(0) // false
is.truthy('') // false
is.truthy({}) // false
is.truthy([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.truthy([]) // false
is.not.truthy('undefined') // false
is.not.truthy('null') // false
is.not.truthy(Symbol()) // false
is.not.truthy(true) // false
is.not.truthy(BigInt(1)) // false
is.not.truthy({}) // false
is.not.truthy(Function) // false
is.not.truthy(() => {}) // false
is.not.truthy(Bigint) // false
is.not.truthy(Symbol) // false
is.not.truthy(new Boolean(1)) // false
is.not.truthy(new Boolean(-1)) // false

is.not.truthy(false) // true
is.not.truthy(new Boolean(0)) // true
is.not.truthy(new Boolean()) // true
is.not.truthy(0) // true
is.not.truthy('') // true
is.not.truthy({}) // true
is.not.truthy([]) // true
// And all other known types will return true
```

## Browser

### is.browser(target: unknown)
- Target argument: **optional**.
- Return: boolean.

```typescript
is.browser() // true if the command is executed in the browser
is.browser(window.navigator) // Returns true if the navigator is not empty

// Alternative
IsConfig.state.navigator = window.navigator;
is.browser() // Returns true if the navigator is not empty

is.browser(false) // false
is.browser(new Boolean(0)) // false
is.browser(new Boolean()) // false
is.browser(0) // false
is.browser('') // false
is.browser({}) // false
is.browser([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.browser() // false if the command is executed in the browser
is.not.browser(window.navigator) // Returns false if the navigator is not empty

// Alternative
IsConfig.state.navigator = window.navigator;
is.not.browser() // Returns false if the navigator is not empty

is.not.browser(false) // true
is.not.browser(new Boolean(0)) // true
is.not.browser(new Boolean()) // true
is.not.browser(0) // true
is.not.browser('') // true
is.not.browser({}) // true
is.not.browser([]) // true
// And all other known types will return true
```

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

### is.firefox(target: unknown)
- Target argument: **optional**.
- Return: boolean.

```typescript
is.firefox() // true if the command is executed in the firefox browser
is.firefox('Mozilla/5.0 (Android; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0') // true

// Alternative
isConfig.state.userAgent = 'Mozilla/5.0 (Android; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0';
is.firefox() // true

// Recomendation
is.browser.firefox();

is.firefox(false) // false
is.firefox(new Boolean(0)) // false
is.firefox(new Boolean()) // false
is.firefox(0) // false
is.firefox('') // false
is.firefox({}) // false
is.firefox([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.firefox() // false if the command is executed in the firefox browser
is.not.firefox('Mozilla/5.0 (Android; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0') // false

// Alternative
isConfig.state.userAgent = 'Mozilla/5.0 (Android; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0';
is.not.firefox() // false

// Recomendation
is.not.browser.firefox();

is.not.firefox(false) // true
is.not.firefox(new Boolean(0)) // true
is.not.firefox(new Boolean()) // true
is.not.firefox(0) // true
is.not.firefox('') // true
is.not.firefox({}) // true
is.not.firefox([]) // true
// And all other known types will return true
```

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

## Hardware

### is.phone(target: unknown)
- Target argument: **optional**.
- Return: boolean.

```typescript
is.phone() // true if the command is executed in the browser with screenWidth <= 768
is.phone(768) // true

// Alternative
IsConfig.state.screen.width = 768;
is.phone() // true

is.phone(769) // false
is.phone(false) // false
is.phone(new Boolean(0)) // false
is.phone(new Boolean()) // false
is.phone(0) // false
is.phone('') // false
is.phone({}) // false
is.phone([]) // false
// And all other known types will return false

// Reversal boolean result
is.not.phone() // false if the command is executed in the browser with screenWidth <= 768
is.not.phone(768) // false

// Alternative
IsConfig.state.screen.width = 768;
is.not.phone() // false

is.not.phone(769) // true
is.not.phone(false) // true
is.not.phone(new Boolean(0)) // true
is.not.phone(new Boolean()) // true
is.not.phone(0) // true
is.not.phone('') // true
is.not.phone({}) // true
is.not.phone([]) // true
// And all other known types will return true
```

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

## Number

### is.number(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is number.

```typescript
is.number(0) // true
is.number(1) // true
is.number(-1) // true

is.number('undefined') // false
is.number('null') // false
is.number(Symbol()) // false
is.number(null) // false
is.number(true) // false
is.number(BigInt(1)) // false
is.number([]) // false
is.number(false) // false
is.number("") // false
is.number('') // false
is.number(``) // false
is.number({}) // false
is.number(undefined) // false
is.number(Function) // false
is.number(() => {}) // false
is.number(BigInt) // false
is.number(Symbol) // false
is.number(NaN) // false
is.number(Infinity) // false
is.number(-Infinity) // false
is.number(Number.POSITIVE_INFINITY) // false
is.number(Number.NEGATIVE_INFINITY) // false
// And all other known types will return false

// Reversal boolean result
is.not.number(0) // false
is.not.number(1) // false
is.not.number(-1) // false

is.not.number('undefined') // true
is.not.number('null') // true
is.not.number(Symbol()) // true
is.not.number(null) // true
is.not.number(true) // true
is.not.number(BigInt(1)) // true
is.not.number([]) // true
is.not.number(false) // true
is.not.number("") // true
is.not.number('') // true
is.not.number(``) // true
is.not.number({}) // true
is.not.number(undefined) // true
is.not.number(Function) // true
is.not.number(() => {}) // true
is.not.number(BigInt) // true
is.not.number(Symbol) // true
is.not.number(NaN) // true
is.not.number(Infinity) // true
is.not.number(-Infinity) // true
is.not.number(Number.POSITIVE_INFINITY) // true
is.not.number(Number.NEGATIVE_INFINITY) // true
// And all other known types will return true
```

### is.bigInt(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is BigInt.

```typescript
is.bigInt(BigInt(1)) // true

is.bigInt(0) // false
is.bigInt(1) // false
is.bigInt(-1) // false
is.bigInt('undefined') // false
is.bigInt('null') // false
is.bigInt(Symbol()) // false
is.bigInt(null) // false
is.bigInt(true) // false
is.bigInt([]) // false
is.bigInt(false) // false
is.bigInt("") // false
is.bigInt('') // false
is.bigInt(``) // false
is.bigInt({}) // false
is.bigInt(undefined) // false
is.bigInt(Function) // false
is.bigInt(() => {}) // false
is.bigInt(BigInt) // false
is.bigInt(Symbol) // false
is.bigInt(NaN) // false
is.bigInt(Infinity) // false
is.bigInt(-Infinity) // false
is.bigInt(Number.POSITIVE_INFINITY) // false
is.bigInt(Number.NEGATIVE_INFINITY) // false
// And all other known types will return false

// Reversal boolean result

is.not.bigInt(BigInt(1)) // false

is.not.bigInt(0) // true
is.not.bigInt(1) // true
is.not.bigInt(-1) // true
is.not.bigInt('undefined') // true
is.not.bigInt('null') // true
is.not.bigInt(Symbol()) // true
is.not.bigInt(null) // true
is.not.bigInt(true) // true
is.not.bigInt([]) // true
is.not.bigInt(false) // true
is.not.bigInt("") // true
is.not.bigInt('') // true
is.not.bigInt(``) // true
is.not.bigInt({}) // true
is.not.bigInt(undefined) // true
is.not.bigInt(Function) // true
is.not.bigInt(() => {}) // true
is.not.bigInt(BigInt) // true
is.not.bigInt(Symbol) // true
is.not.bigInt(NaN) // true
is.not.bigInt(Infinity) // true
is.not.bigInt(-Infinity) // true
is.not.bigInt(Number.POSITIVE_INFINITY) // true
is.not.bigInt(Number.NEGATIVE_INFINITY) // true
// And all other known types will return true
```

### is.even(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is even.

```typescript
is.even(0) // true
is.even(2) // true
is.even(-2) // true
is.even(BigInt(2)) // true
is.even(2n) // true
is.even(-32n) // true

is.even(BigInt(1)) // true
is.even(1) // false
is.even(-1) // false
is.even('undefined') // false
is.even('null') // false
is.even(Symbol()) // false
is.even(null) // false
is.even(true) // false
is.even([]) // false
is.even(false) // false
is.even("") // false
is.even('') // false
is.even(``) // false
is.even({}) // false
is.even(undefined) // false
is.even(Function) // false
is.even(() => {}) // false
is.even(BigInt) // false
is.even(Symbol) // false
is.even(NaN) // false
is.even(Infinity) // false
is.even(-Infinity) // false
is.even(Number.POSITIVE_INFINITY) // false
is.even(Number.NEGATIVE_INFINITY) // false
// And all other known types will return false

// Reversal boolean result
is.not.even(0) // false
is.not.even(2) // false
is.not.even(-2) // false
is.not.even(BigInt(2)) // false
is.not.even(2n) // false
is.not.even(-32n) // false

is.not.even(BigInt(1)) // true
is.not.even(1) // true
is.not.even(-1) // true
is.not.even('undefined') // true
is.not.even('null') // true
is.not.even(Symbol()) // true
is.not.even(null) // true
is.not.even(true) // true
is.not.even([]) // true
is.not.even(false) // true
is.not.even("") // true
is.not.even('') // true
is.not.even(``) // true
is.not.even({}) // true
is.not.even(undefined) // true
is.not.even(Function) // true
is.not.even(() => {}) // true
is.not.even(BigInt) // true
is.not.even(Symbol) // true
is.not.even(NaN) // true
is.not.even(Infinity) // true
is.not.even(-Infinity) // true
is.not.even(Number.POSITIVE_INFINITY) // true
is.not.even(Number.NEGATIVE_INFINITY) // true
// And all other known types will return true
```

### is.odd(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is odd.

```typescript
is.odd(1) // true
is.odd(-1) // true
is.odd(BigInt(1)) // true
is.odd(1n) // true
is.odd(-31n) // true

is.odd(BigInt(2)) // true
is.odd(0) // false
is.odd('undefined') // false
is.odd('null') // false
is.odd(Symbol()) // false
is.odd(null) // false
is.odd(true) // false
is.odd([]) // false
is.odd(false) // false
is.odd("") // false
is.odd('') // false
is.odd(``) // false
is.odd({}) // false
is.odd(undefined) // false
is.odd(Function) // false
is.odd(() => {}) // false
is.odd(BigInt) // false
is.odd(Symbol) // false
is.odd(NaN) // false
is.odd(Infinity) // false
is.odd(-Infinity) // false
is.odd(Number.POSITIVE_INFINITY) // false
is.odd(Number.NEGATIVE_INFINITY) // false
// And all other known types will return false

// Reversal boolean result
is.not.odd(1) // false
is.not.odd(-1) // false
is.not.odd(BigInt(1)) // false
is.not.odd(1n) // false
is.not.odd(-31n) // false

is.not.odd(BigInt(2)) // true
is.not.odd(0) // true
is.not.odd('undefined') // true
is.not.odd('null') // true
is.not.odd(Symbol()) // true
is.not.odd(null) // true
is.not.odd(true) // true
is.not.odd([]) // true
is.not.odd(false) // true
is.not.odd("") // true
is.not.odd('') // true
is.not.odd(``) // true
is.not.odd({}) // true
is.not.odd(undefined) // true
is.not.odd(Function) // true
is.not.odd(() => {}) // true
is.not.odd(BigInt) // true
is.not.odd(Symbol) // true
is.not.odd(NaN) // true
is.not.odd(Infinity) // true
is.not.odd(-Infinity) // true
is.not.odd(Number.POSITIVE_INFINITY) // true
is.not.odd(Number.NEGATIVE_INFINITY) // true
// And all other known types will return true
```

### is.zero(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is 0.

```typescript
is.zero(0) // true

is.zero(1) // false
is.zero(-1) // false
is.zero(BigInt(1)) // false
is.zero(BigInt(0)) // false
is.zero(1n) // false
is.zero(-31n) // false
is.zero(BigInt(2)) // false
is.zero('undefined') // false
is.zero('null') // false
is.zero(Symbol()) // false
is.zero(null) // false
is.zero(true) // false
is.zero([]) // false
is.zero(false) // false
is.zero("") // false
is.zero('') // false
is.zero(``) // false
is.zero({}) // false
is.zero(undefined) // false
is.zero(Function) // false
is.zero(() => {}) // false
is.zero(BigInt) // false
is.zero(Symbol) // false
is.zero(NaN) // false
is.zero(Infinity) // false
is.zero(-Infinity) // false
is.zero(Number.POSITIVE_INFINITY) // false
is.zero(Number.NEGATIVE_INFINITY) // false
// And all other known types will return false

// Reversal boolean result
is.not.zero(0) // false

is.not.zero(1) // true
is.not.zero(-1) // true
is.not.zero(BigInt(1)) // true
is.not.zero(BigInt(0)) // true
is.not.zero(1n) // true
is.not.zero(-31n) // true
is.not.zero(BigInt(2)) // true
is.not.zero('undefined') // true
is.not.zero('null') // true
is.not.zero(Symbol()) // true
is.not.zero(null) // true
is.not.zero(true) // true
is.not.zero([]) // true
is.not.zero(false) // true
is.not.zero("") // true
is.not.zero('') // true
is.not.zero(``) // true
is.not.zero({}) // true
is.not.zero(undefined) // true
is.not.zero(Function) // true
is.not.zero(() => {}) // true
is.not.zero(BigInt) // true
is.not.zero(Symbol) // true
is.not.zero(NaN) // true
is.not.zero(Infinity) // true
is.not.zero(-Infinity) // true
is.not.zero(Number.POSITIVE_INFINITY) // true
is.not.zero(Number.NEGATIVE_INFINITY) // true
// And all other known types will return true
```

### is.int(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is integer.

```typescript
is.int(123) // true
is.int(0) // true

is.int(123.123) // false
is.int('0') // false
is.int('-0') // false
is.int('+0') // false
is.int('-2') // false
is.int('+2') // false
is.int('2') // false
is.int(4n) // false
is.int(-3n) // false
is.int('2n') // false
is.int('-5n') // false
is.int(BigInt(1)) // false
is.int('undefined') // false
is.int('null') // false
is.int(Symbol()) // false
is.int(null) // false
is.int(true) // false
is.int([]) // false
is.int(false) // false
is.int("") // false
is.int('') // false
is.int(``) // false
is.int({}) // false
is.int(undefined) // false
is.int(Function) // false
is.int(() => {}) // false
is.int(BigInt) // false
is.int(Symbol) // false
is.int(NaN) // false
is.int(Infinity) // false
is.int(-Infinity) // false
is.int(Number.POSITIVE_INFINITY) // false
is.int(Number.NEGATIVE_INFINITY) // false
// And all other known types will return false

// Reversal boolean result
is.not.int(123) // false
is.not.int(0) // false

is.not.int(123.123) // true
is.not.int('0') // true
is.not.int('-0') // true
is.not.int('+0') // true
is.not.int('-2') // true
is.not.int('+2') // true
is.not.int('2') // true
is.not.int(4n) // true
is.not.int(-3n) // true
is.not.int('2n') // true
is.not.int('-5n') // true
is.not.int(BigInt(1)) // true
is.not.int('undefined') // true
is.not.int('null') // true
is.not.int(Symbol()) // true
is.not.int(null) // true
is.not.int(true) // true
is.not.int([]) // true
is.not.int(false) // true
is.not.int("") // true
is.not.int('') // true
is.not.int(``) // true
is.not.int({}) // true
is.not.int(undefined) // true
is.not.int(Function) // true
is.not.int(() => {}) // true
is.not.int(BigInt) // true
is.not.int(Symbol) // true
is.not.int(NaN) // true
is.not.int(Infinity) // true
is.not.int(-Infinity) // true
is.not.int(Number.POSITIVE_INFINITY) // true
is.not.int(Number.NEGATIVE_INFINITY) // true
// And all other known types will return true
```

### is.positive(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is positive number.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.negative(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is negative number.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.infinity(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is infinity.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.numeric(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is numeric.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

## String


### is.string(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is string.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.word(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is word.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.camelCase(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is camelCase.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.kebabCase(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is kebabCase.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.lowerCase(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is lowerCase.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.pascalCase(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is pascalCase.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.snakeCase(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is snakeCase.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.upperCase(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is upperCase.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.char(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is char.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.macAddress(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is macAddress.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ipv4(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is ipv4.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ipv6(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is ipv6.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

## System

### is.android(target: unknown)
- Target argument: **optional**.
- Checks if current system is android.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ios(target: unknown)
- Target argument: **optional**.
- Checks if current system is ios.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.windows(target: unknown)
- Target argument: **optional**.
- Checks if current system is windows.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

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

## HTML

### is.HTMLDirectoryElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLDirectoryElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLDocument(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLDocument.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLFontElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLFontElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLFrameElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLFrameElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLMarqueeElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLMarqueeElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLParamElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLParamElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLTableDataCellElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLTableDataCellElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLTableHeaderCellElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLTableHeaderCellElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLAllCollection(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLAllCollection.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLCollectionBase(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLCollectionBase.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLHyperlinkElementUtils(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLHyperlinkElementUtils.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLOrSVGElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLOrSVGElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLAnchorElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLAnchorElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLAreaElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLAreaElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLAudioElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLAudioElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLBRElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLBRElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLBaseElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLBaseElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLBodyElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLBodyElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLButtonElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLButtonElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLCanvasElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLCanvasElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLCollection(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLCollection.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLDListElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLDListElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLDataElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLDataElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLDataListElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLDataListElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLDetailsElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLDetailsElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLDialogElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLDialogElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLDivElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLDivElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLEmbedElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLEmbedElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLFieldSetElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLFieldSetElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLFormControlsCollection(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLFormControlsCollection.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLFormElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLFormElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLHRElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLHRElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLHeadElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLHeadElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLHeadingElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLHeadingElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLHtmlElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLHtmlElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLIFrameElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLIFrameElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLImageElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLImageElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLInputElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLInputElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLLIElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLLIElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLLabelElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLLabelElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLLegendElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLLegendElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLLinkElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLLinkElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLMapElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLMapElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLMediaElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLMediaElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLMenuElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLMenuElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLMetaElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLMetaElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLMeterElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLMeterElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLModElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLModElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLOListElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLOListElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLObjectElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLObjectElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLOptGroupElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLOptGroupElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLOptionElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLOptionElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLOptionsCollection(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLOptionsCollection.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLOutputElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLOutputElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLParagraphElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLParagraphElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLPictureElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLPictureElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLPreElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLPreElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLProgressElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLProgressElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLQuoteElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLQuoteElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLScriptElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLScriptElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLSelectElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLSelectElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLSlotElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLSlotElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLSourceElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLSourceElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLSpanElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLSpanElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLStyleElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLStyleElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLTableCaptionElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLTableCaptionElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLTableCellElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLTableCellElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLTableColElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLTableColElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLTableElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLTableElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLTableRowElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLTableRowElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLTableSectionElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLTableSectionElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLTemplateElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLTemplateElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLTextAreaElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLTextAreaElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLTimeElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLTimeElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLTitleElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLTitleElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLTrackElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLTrackElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLUListElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLUListElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLUnknownElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLUnknownElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HTMLVideoElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

## External


### is.Map(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.String(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Date(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Set(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.URIError(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RegExp(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WeakSet(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WeakMap(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DataView(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Float32Array(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Int32Array(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Uint8ClampedArray(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Int8Array(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Uint8Array(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Int16Array(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Uint16Array(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Uint32Array(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Float64Array(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.BigInt64Array(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.BigUint64Array(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RangeError(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DOMException(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Error(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EvalError(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ReferenceError(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SyntaxError(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TypeError(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Algorithm(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AssignedNodesOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AudioBufferOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AudioBufferSourceOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AudioConfiguration(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AudioContextOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AudioNodeOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AudioTimestamp(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AuthenticationExtensionsClientInputs(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AuthenticationExtensionsClientOutputs(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AuthenticatorSelectionCriteria(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.BlobEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.BlobPropertyBag(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSStyleSheetInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CacheQueryOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CanvasRenderingContext2DSettings(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ClientQueryOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ClipboardItemOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ComputedKeyframe(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ConstantSourceOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ConstrainBooleanParameters(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ConstrainDOMStringParameters(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CredentialCreationOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CredentialPropertiesOutput(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CredentialRequestOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CryptoKeyPair(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DOMMatrix2DInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DOMPointInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DOMQuadInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DOMRectInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DeviceMotionEventAccelerationInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DeviceMotionEventRotationRateInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DisplayMediaStreamOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DocumentTimelineOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DoubleRange(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EffectTiming(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ElementCreationOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ElementDefinitionOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EventListenerOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EventSourceInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FileSystemFlags(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FileSystemGetDirectoryOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FileSystemGetFileOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FileSystemRemoveOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FocusOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FontFaceDescriptors(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FullscreenOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.GetAnimationsOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.GetNotificationOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.GetRootNodeOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IDBDatabaseInfo(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IDBIndexParameters(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IDBObjectStoreParameters(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IDBTransactionOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IdleRequestOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ImageBitmapOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ImageBitmapRenderingContextSettings(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ImageDataSettings(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ImportMeta(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IntersectionObserverEntryInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IntersectionObserverInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.JsonWebKey(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.KeyAlgorithm(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Keyframe(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.LockInfo(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.LockManagerSnapshot(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.LockOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaCapabilitiesInfo(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaConfiguration(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaElementAudioSourceOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaImage(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaKeySystemConfiguration(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaKeySystemMediaCapability(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaMetadataInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaPositionState(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaRecorderOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaSessionActionDetails(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaStreamAudioSourceOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaStreamConstraints(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaTrackCapabilities(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaTrackConstraintSet(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaTrackSettings(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaTrackSupportedConstraints(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MutationObserverInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.NavigationPreloadState(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.NotificationAction(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.NotificationOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.OfflineAudioContextOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.OptionalEffectTiming(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PaymentCurrencyAmount(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PaymentDetailsBase(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PaymentDetailsModifier(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PaymentItem(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PaymentMethodData(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PaymentValidationErrors(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PerformanceMarkOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PerformanceMeasureOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PerformanceObserverInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PeriodicWaveConstraints(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PermissionDescriptor(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PositionOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PropertyIndexedKeyframes(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PublicKeyCredentialCreationOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PublicKeyCredentialDescriptor(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PublicKeyCredentialEntity(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PublicKeyCredentialParameters(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PublicKeyCredentialRequestOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PushSubscriptionJSON(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PushSubscriptionOptionsInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.QueuingStrategyInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCCertificateExpiration(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCConfiguration(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCDataChannelInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCDtlsFingerprint(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCEncodedAudioFrameMetadata(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCEncodedVideoFrameMetadata(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCErrorInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCIceCandidateInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCIceServer(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCLocalSessionDescriptionInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCOfferAnswerOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCRtcpParameters(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCRtpCapabilities(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCRtpCodecCapability(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCRtpCodecParameters(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCRtpCodingParameters(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCRtpContributingSource(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCRtpHeaderExtensionCapability(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCRtpHeaderExtensionParameters(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCRtpParameters(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCRtpTransceiverInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCSessionDescriptionInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCStats(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ReadableStreamGetReaderOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RegistrationOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RequestInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ResizeObserverOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ResponseInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RsaOtherPrimesInfo(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGBoundingBoxOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ScrollOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ShadowRootInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ShareData(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.StaticRangeInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.StorageEstimate(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.StreamPipeOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.StructuredSerializeOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TextDecodeOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TextDecoderOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TextEncoderEncodeIntoResult(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TouchInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ULongRange(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.UnderlyingByteSource(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ValidityStateFlags(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.VideoColorSpaceInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.VideoConfiguration(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.VideoFrameCallbackMetadata(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebGLContextAttributes(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WorkerOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WorkletOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ANGLE_instanced_arrays(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ARIAMixin(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AbortController(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AbstractRange(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AbstractWorker(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Animatable(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AnimationEffect(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AnimationFrameProvider(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AnimationTimeline(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AudioBuffer(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AudioListener(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AudioParam(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AuthenticatorResponse(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.BarProp(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Blob(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Body(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSRule(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSRuleList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSStyleDeclaration(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Cache(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CacheStorage(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CanvasCompositing(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CanvasDrawImage(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CanvasDrawPath(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CanvasFillStrokeStyles(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CanvasFilters(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CanvasGradient(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CanvasImageData(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CanvasImageSmoothing(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CanvasPath(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CanvasPathDrawingStyles(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CanvasPattern(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CanvasRect(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CanvasShadowStyles(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CanvasState(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CanvasText(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CanvasTextDrawingStyles(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CanvasTransform(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CanvasUserInterface(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ClipboardItem(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Credential(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CredentialsContainer(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Crypto(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CryptoKey(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CustomElementRegistry(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DOMImplementation(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DOMMatrixReadOnly(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DOMParser(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DOMPointReadOnly(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DOMQuad(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DOMRectList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DOMRectReadOnly(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DOMStringList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DOMTokenList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DataTransfer(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DataTransferItem(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DataTransferItemList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DeviceMotionEventAcceleration(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DeviceMotionEventRotationRate(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DocumentAndElementEventHandlers(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DocumentOrShadowRoot(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EXT_blend_minmax(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EXT_color_buffer_float(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EXT_color_buffer_half_float(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EXT_float_blend(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EXT_frag_depth(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EXT_sRGB(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EXT_shader_texture_lod(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EXT_texture_compression_bptc(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EXT_texture_compression_rgtc(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EXT_texture_filter_anisotropic(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EXT_texture_norm16(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ElementCSSInlineStyle(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ElementContentEditable(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Event(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EventCounts(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EventListener(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EventListenerObject(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EventTarget(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.External(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FileList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FileSystem(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FileSystemDirectoryReader(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FileSystemEntry(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FileSystemHandle(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FontFace(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FontFaceSource(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FormData(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Gamepad(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.GamepadButton(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.GamepadHapticActuator(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.GenericTransformStream(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Geolocation(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.GeolocationCoordinates(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.GeolocationPosition(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.GeolocationPositionError(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.GlobalEventHandlers(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Headers(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.History(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IDBCursor(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IDBFactory(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IDBIndex(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IDBKeyRange(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IDBObjectStore(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IdleDeadline(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ImageBitmap(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ImageBitmapRenderingContext(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ImageData(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.InnerHTML(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IntersectionObserver(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IntersectionObserverEntry(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.KHR_parallel_shader_compile(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.LinkStyle(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Location(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Lock(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.LockManager(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaCapabilities(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaDeviceInfo(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaError(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaKeySystemAccess(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaKeys(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaMetadata(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaSession(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MessageChannel(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MimeType(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MimeTypeArray(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MutationObserver(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MutationRecord(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.NavigationPreloadManager(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.NavigatorAutomationInformation(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.NavigatorConcurrentHardware(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.NavigatorContentUtils(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.NavigatorCookies(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.NavigatorID(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.NavigatorLanguage(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.NavigatorLocks(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.NavigatorOnLine(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.NavigatorPlugins(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.NavigatorStorage(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.NodeIterator(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.NodeList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.NonDocumentTypeChildNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.NonElementParentNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.OES_draw_buffers_indexed(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.OES_element_index_uint(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.OES_standard_derivatives(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.OES_texture_float(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.OES_texture_float_linear(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.OES_texture_half_float(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.OES_texture_half_float_linear(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.OES_vertex_array_object(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.OVR_multiview2(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PerformanceEntry(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PerformanceNavigation(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PerformanceObserver(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PerformanceObserverEntryList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PerformanceServerTiming(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PerformanceTiming(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PeriodicWave(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Permissions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Plugin(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PluginArray(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PushManager(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PushSubscription(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PushSubscriptionOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCCertificate(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCEncodedAudioFrame(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCEncodedVideoFrame(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCIceCandidate(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCRtpReceiver(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCRtpSender(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCRtpTransceiver(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCSessionDescription(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCStatsReport(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ReadableByteStreamController(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ReadableStreamBYOBRequest(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ReadableStreamGenericReader(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ResizeObserver(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ResizeObserverEntry(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ResizeObserverSize(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGAngle(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGAnimatedAngle(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGAnimatedBoolean(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGAnimatedEnumeration(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGAnimatedInteger(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGAnimatedLength(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGAnimatedLengthList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGAnimatedNumber(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGAnimatedNumberList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGAnimatedPoints(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGAnimatedPreserveAspectRatio(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGAnimatedRect(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGAnimatedString(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGAnimatedTransformList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGFilterPrimitiveStandardAttributes(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGFitToViewBox(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGLength(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGLengthList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGNumber(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGNumberList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGPointList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGPreserveAspectRatio(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGStringList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGTests(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGTransform(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGTransformList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGURIReference(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGUnitTypes(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Screen(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Selection(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Slottable(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SpeechRecognitionAlternative(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SpeechRecognitionResult(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SpeechRecognitionResultList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SpeechSynthesisVoice(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Storage(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.StorageManager(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.StyleMedia(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.StyleSheet(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.StyleSheetList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SubtleCrypto(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TextDecoderCommon(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TextEncoderCommon(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TextMetrics(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TextTrackCueList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TimeRanges(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Touch(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TouchList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TreeWalker(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.URL(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.URLSearchParams(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.VTTRegion(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ValidityState(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.VideoColorSpace(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.VideoPlaybackQuality(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WEBGL_color_buffer_float(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WEBGL_compressed_texture_astc(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WEBGL_compressed_texture_etc(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WEBGL_compressed_texture_etc1(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WEBGL_compressed_texture_s3tc(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WEBGL_compressed_texture_s3tc_srgb(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WEBGL_debug_renderer_info(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WEBGL_debug_shaders(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WEBGL_depth_texture(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WEBGL_draw_buffers(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WEBGL_lose_context(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WEBGL_multi_draw(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebGL2RenderingContextBase(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebGL2RenderingContextOverloads(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebGLActiveInfo(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebGLBuffer(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebGLFramebuffer(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebGLProgram(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebGLQuery(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebGLRenderbuffer(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebGLRenderingContextBase(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebGLRenderingContextOverloads(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebGLSampler(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebGLShader(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebGLShaderPrecisionFormat(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebGLSync(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebGLTexture(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebGLTransformFeedback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebGLUniformLocation(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebGLVertexArrayObject(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebGLVertexArrayObjectOES(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WindowEventHandlers(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WindowLocalStorage(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WindowOrWorkerGlobalScope(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WindowSessionStorage(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Worklet(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WritableStreamDefaultController(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.XMLSerializer(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.XPathEvaluatorBase(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.XPathExpression(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.XPathResult(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.XSLTProcessor(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.BlobCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CustomElementConstructor(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DecodeErrorCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DecodeSuccessCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ErrorCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FileCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FileSystemEntriesCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FileSystemEntryCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FrameRequestCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FunctionStringCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IdleRequestCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IntersectionObserverCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.LockGrantedCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaSessionActionHandler(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MutationCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.NotificationPermissionCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.OnBeforeUnloadEventHandlerNonNull(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.OnErrorEventHandlerNonNull(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PerformanceObserverCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PositionCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PositionErrorCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCPeerConnectionErrorCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCSessionDescriptionCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RemotePlaybackAvailabilityCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ResizeObserverCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.UnderlyingSinkAbortCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.UnderlyingSinkCloseCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.UnderlyingSinkStartCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.UnderlyingSourceCancelCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.VideoFrameRequestCallback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.VoidFunction(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AddEventListenerOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AesCbcParams(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AesCtrParams(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AesDerivedKeyParams(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AesGcmParams(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AesKeyAlgorithm(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AesKeyGenParams(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AnalyserOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AnimationEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AnimationPlaybackEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AudioProcessingEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AudioWorkletNodeOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.BiquadFilterOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ChannelMergerOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ChannelSplitterOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ClipboardEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CloseEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CompositionEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ComputedEffectTiming(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ConstrainDoubleRange(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ConstrainULongRange(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ConvolverOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DOMMatrixInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DelayOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DeviceMotionEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DeviceOrientationEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DragEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DynamicsCompressorOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EcKeyAlgorithm(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EcKeyGenParams(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EcKeyImportParams(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EcdhKeyDeriveParams(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EcdsaParams(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ErrorEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EventModifierInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FilePropertyBag(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FocusEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FontFaceSetLoadEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FormDataEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.GainOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.GamepadEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HashChangeEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HkdfParams(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HmacImportParams(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HmacKeyAlgorithm(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HmacKeyGenParams(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IDBVersionChangeEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IIRFilterOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.InputEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.KeyboardEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.KeyframeAnimationOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.KeyframeEffectOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaCapabilitiesDecodingInfo(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaCapabilitiesEncodingInfo(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaDecodingConfiguration(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaEncodingConfiguration(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaEncryptedEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaKeyMessageEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaQueryListEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaStreamTrackEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaTrackConstraints(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MouseEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MultiCacheQueryOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.OfflineAudioCompletionEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.OscillatorOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PageTransitionEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PannerOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PaymentDetailsInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PaymentDetailsUpdate(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PaymentMethodChangeEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PaymentRequestUpdateEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Pbkdf2Params(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PeriodicWaveOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PictureInPictureEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PointerEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PopStateEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ProgressEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PromiseRejectionEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PublicKeyCredentialRpEntity(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PublicKeyCredentialUserEntity(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCAnswerOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCDTMFToneChangeEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCDataChannelEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCErrorEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCIceCandidatePairStats(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCInboundRtpStreamStats(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCOfferOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCOutboundRtpStreamStats(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCPeerConnectionIceErrorEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCPeerConnectionIceEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCReceivedRtpStreamStats(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCRtpEncodingParameters(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCRtpReceiveParameters(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCRtpSendParameters(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCRtpStreamStats(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCRtpSynchronizationSource(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCSentRtpStreamStats(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCTrackEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCTransportStats(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RsaHashedImportParams(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RsaHashedKeyAlgorithm(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RsaHashedKeyGenParams(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RsaKeyAlgorithm(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RsaKeyGenParams(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RsaOaepParams(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RsaPssParams(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ScrollIntoViewOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ScrollToOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SecurityPolicyViolationEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SpeechSynthesisErrorEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SpeechSynthesisEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.StereoPannerOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.StorageEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SubmitEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TouchEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TrackEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TransitionEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.UIEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WaveShaperOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebGLContextEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WheelEventInit(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WindowPostMessageOptions(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AbortSignal(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AnalyserNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Animation(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AnimationEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AnimationPlaybackEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Attr(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AudioBufferSourceNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AudioContext(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AudioDestinationNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AudioNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AudioProcessingEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AudioScheduledSourceNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AudioWorklet(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AudioWorkletNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AuthenticatorAssertionResponse(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.AuthenticatorAttestationResponse(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.BaseAudioContext(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.BeforeUnloadEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.BiquadFilterNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.BlobEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.BroadcastChannel(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CDATASection(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSAnimation(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSConditionRule(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSContainerRule(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSCounterStyleRule(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSFontFaceRule(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSFontPaletteValuesRule(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSGroupingRule(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSImportRule(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSKeyframeRule(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSKeyframesRule(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSLayerBlockRule(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSLayerStatementRule(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSMediaRule(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSNamespaceRule(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSPageRule(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSStyleRule(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSStyleSheet(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSSupportsRule(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CSSTransition(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CanvasCaptureMediaStreamTrack(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ChannelMergerNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ChannelSplitterNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ChildNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ClientRect(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Clipboard(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ClipboardEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CloseEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Comment(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CompositionEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ConstantSourceNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ConvolverNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.CountQueuingStrategy(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DOMMatrix(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DOMPoint(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DOMRect(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DelayNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DeviceMotionEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DeviceOrientationEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DocumentTimeline(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DragEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.DynamicsCompressorNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ElementInternals(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ErrorEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.EventSource(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.File(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FileReader(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FileSystemDirectoryEntry(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FileSystemDirectoryHandle(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FileSystemFileEntry(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FileSystemFileHandle(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FocusEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FontFaceSet(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FontFaceSetLoadEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.FormDataEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.GainNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.GamepadEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.HashChangeEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IDBCursorWithValue(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IDBDatabase(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IDBTransaction(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IDBVersionChangeEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.IIRFilterNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.InputDeviceInfo(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.InputEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.KeyboardEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.KeyframeEffect(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaDevices(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaElementAudioSourceNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaEncryptedEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaKeyMessageEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaKeySession(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaQueryList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaQueryListEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaRecorder(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaSource(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaStream(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaStreamAudioDestinationNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaStreamAudioSourceNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaStreamTrack(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MediaStreamTrackEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MessagePort(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MouseEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.MutationEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Node(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Notification(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.OfflineAudioCompletionEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.OfflineAudioContext(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.OffscreenCanvas(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.OscillatorNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.OverconstrainedError(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PageTransitionEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PannerNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ParentNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Path2D(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PaymentMethodChangeEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PaymentRequest(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PaymentRequestUpdateEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PaymentResponse(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Performance(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PerformanceEventTiming(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PerformanceMark(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PerformanceMeasure(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PerformanceNavigationTiming(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PerformancePaintTiming(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PerformanceResourceTiming(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PermissionStatus(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PictureInPictureEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PictureInPictureWindow(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PointerEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PopStateEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PromiseRejectionEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.PublicKeyCredential(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCDTMFSender(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCDTMFToneChangeEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCDataChannel(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCDataChannelEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCDtlsTransport(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCError(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCErrorEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCIceTransport(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCPeerConnection(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCPeerConnectionIceErrorEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCPeerConnectionIceEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCSctpTransport(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RTCTrackEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RadioNodeList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Range(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ReadableStreamBYOBReader(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.RemotePlayback(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Request(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.Response(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGAnimateElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGAnimateMotionElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGAnimateTransformElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGCircleElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGClipPathElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGComponentTransferFunctionElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGDefsElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGDescElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGEllipseElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGFEDistantLightElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGFEFuncAElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGFEFuncBElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGFEFuncGElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGFEFuncRElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGFEMergeNodeElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGFEPointLightElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGFESpotLightElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGForeignObjectElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGGElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGGeometryElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGLineElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGLinearGradientElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGMaskElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGMetadataElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGPathElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGRadialGradientElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGRectElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGSetElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGStopElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGSwitchElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGTSpanElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGTextContentElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGTextElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGTextPositioningElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SVGTitleElement(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ScreenOrientation(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ScriptProcessorNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SecurityPolicyViolationEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ServiceWorkerContainer(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.ServiceWorkerRegistration(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SourceBuffer(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SourceBufferList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SpeechSynthesis(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SpeechSynthesisErrorEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SpeechSynthesisEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SpeechSynthesisUtterance(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.StaticRange(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.StereoPannerNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.StorageEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.SubmitEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TextDecoder(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TextEncoder(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TextTrack(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TextTrackCue(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TextTrackList(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TouchEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TrackEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.TransitionEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.UIEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.VTTCue(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.VisualViewport(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WaveShaperNode(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebGLContextEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WebSocket(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.WheelEvent(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.XMLDocument(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.XMLHttpRequest(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.XMLHttpRequestEventTarget(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.XMLHttpRequestUpload(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

### is.XPathEvaluator(target: unknown)
- Target argument: **required**.
- Checks if the given "**target**" type is HTMLVideoElement.

```typescript

// And all other known types will return false

// Reversal boolean result

// And all other known types will return true
```

[Back to table of contents](#-table-of-contents)

## 👤 Contributing

[//]: # 'Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.'

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Add your changes: `git add .`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request 😎

## ✍️ Authors

- **Ivan Karbashevskyi** - _Initial work_ - [Karbashevskyi](https://github.com/Karbashevskyi)

See also the list of [contributors](https://github.com/Karbashevskyi/thiis/contributors) who participated in this project.

## 📜 License

[MIT License](https://andreasonny.mit-license.org/2019) © Karbashevskyi
