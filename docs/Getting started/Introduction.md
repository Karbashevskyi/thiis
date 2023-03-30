# 💡 Introduction

![NPM Latest Version](https://img.shields.io/npm/v/thiis)

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

# Idea

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
