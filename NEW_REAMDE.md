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
      TODO
    - [API](#-api)
    - [New methods that are available through the package, but which are only declared in the package, but actually take data from outside the package.](#new-methods-that-are-available-through-the-package-but-which-are-only-declared-in-the-package-but-actually-take-data-from-outside-the-package)
        - [General (841 methods)](#generale--841-methods-)
        - [HTML (80 methods)](#html--80-methods-)
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



## System
## Rest
## External

