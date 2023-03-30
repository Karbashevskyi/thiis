# thiis
![NPM Latest Version](https://img.shields.io/npm/v/thiis)

## Introduction

### Why you should use and support the package:
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

## 💡 Idea

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

## 📝 Table of contents

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

## 💿 Installation

```bash
npm install thiis
```

## 🔗 CDN

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

## 🙌 Import

```bash
import {is} from "thiis";
```

## 🗃 API

### Boolean

#### is.boolean(target: unknown)
Checks if the given "target" type is boolean.
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

```

#### is.false(target: unknown)
Checks if the given "target" type is false.
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

```

#### is.falsy(target: unknown)
Checks if the given "target" type is false.
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

```

#### is.true(target: unknown)
Checks if the given "target" type is true.
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

```

#### is.truthy(target: unknown)
Checks if the given "target" type is true.

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

```

### Browser

#### is.browser(target: unknown)
Return: boolean.

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

```

#### is.edge(target: unknown)
Return: boolean.

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

```

#### is.firefox(target: unknown)
Return: boolean.

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

```

#### is.ie(target: unknown)
Return: boolean.

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

```

#### is.opera(target: unknown)
Return: boolean.

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

```

#### is.safari(target: unknown)
Return: boolean.

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

```

### Hardware
### Number
### String
### System
### Rest
### External

