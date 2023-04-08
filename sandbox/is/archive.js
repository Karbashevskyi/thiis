console.time('Initialization time fo new engine');
;(function (root, factory) {    // eslint-disable-line no-extra-semi
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(function () {
            // Also create a global in case some scripts
            // that are loaded still are looking for
            // a global even when an AMD loader is in use.
            return (root.is = factory());
        });
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is self)
        root.is = factory();
    }
}(this, function () {

    const is = {};

    function defineNewMethod(method, path, pathNames) {

        const newMethod = function () {

            // console.log(this, arguments, method, path, pathNames);

            const self = this.originalName === method.originalName ? this : this[method.originalName];

            /**
             * !!! ONE CONTEXT FOR ALL EXECUTION !!!
             */

            if (!('_temporaryContext' in self)) {
                self._temporaryContext = {
                    result: false,
                    index: 0,
                    maxIndex: self.pathNames.length - 1,
                    indexOfNotMethod: self.pathNames.indexOf('not'),
                    indexOfFirstOrMethod: self.pathNames.indexOf('or')
                }
                self._temporaryContext['notMethodIsFirst'] = self._temporaryContext['indexOfNotMethod'] === 0;
            }


            if (self._temporaryContext.notMethodIsFirst) {
                /**
                 * TODO
                 * 1. [ ] is.not.object()
                 * 1. [ ] [not, wrapper->object]
                 *
                 * 2. [ ] is.not.null.or.undefined()
                 * 2. [ ] [not, wrapper->null, wrapper->or, wrapper->undefined]
                 */
            } else {

                if (self._temporaryContext.indexOfNotMethod > 0) {

                    /**
                     * Examples:
                     *
                     *
                     * 6. [ ] is.object.not.empty()
                     * 6. [ ] [object, wrapper->not, wrapper->empty]
                     *
                     * 7. [ ] is.object.not.empty.or.null()
                     * 7. [ ] [object, wrapper->not, wrapper->empty, wrapper->or, wrapper->null]
                     *
                     * 8. [ ] is.object.or.string.not.empty()
                     * 8. [ ] [object, wrapper->or, wrapper->string, wrapper->not, wrapper->empty]
                     */

                } else {
                    if (self._temporaryContext.indexOfFirstOrMethod > 0) {
                        /**
                         * 4. [ ] is.object.or.string()
                         * 4. [ ] [object, wrapper->or, wrapper->string]
                         *
                         * 5. [ ] is.null.or.undefined.or.empty()
                         * 5. [ ] [null, wrapper->or, wrapper->undefined, wrapper->or, wrapper->empty]
                         */
                    } else {
                        /**
                         * 3. [ ] is.object.empty()
                         * 3. [ ] [object, wrapper->empty]
                         */
                        self._temporaryContext.result = self.path[self._temporaryContext.index].apply(self, arguments);
                        if (self._temporaryContext.result) {
                            self._temporaryContext.index++;
                            if (self._temporaryContext.index <= self._temporaryContext.maxIndex) {
                                return self.path[self._temporaryContext.index].apply(self, arguments);
                            }
                            delete self._temporaryContext;
                            return true;
                        }
                        return false;

                    }
                }

            }

        };


        newMethod.path = [...path, method];
        newMethod.pathNames = [...pathNames, method.originalName];
        newMethod.originalName = method.originalName;
        newMethod.allowed = method.allowed;

        return newMethod;

    }

    const MAX_LEVEL_OF_OR = 1; // is.array.or.map.or.set

    function setMethods(target, path = [], pathNames = []) {

        if (!('originalName' in target)) {
            // If level is 0 we target that all commands don't have originalName property.
            target.originalName = target.name.toLowerCase();
        }

        pathNames = [...pathNames, target.originalName];
        path = [...path, target];
        const countOfOr = pathNames.filter(name => name === 'or').length;

        for (const method of target.allowed) {

            if (!('originalName' in method)) {
                // If level is 0 we know that all commands don't have originalName property.
                method.originalName = method.name.toLowerCase();
            }

            if (pathNames.some(name => name !== 'or' && name === method.originalName)) {
                continue;
            }

            target[method.originalName] = defineNewMethod(method, path, pathNames);

            if (countOfOr < MAX_LEVEL_OF_OR) {

                target[method.originalName] = setMethods(
                    target[method.originalName],
                    path,
                    pathNames
                );
            }
        }

        return target;
    }

    is.object = function OBJECT(target) {
        return typeof target === 'object' && target !== null && !Array.isArray(target);
    }

    is.array = function ARRAY(target) {
        return target instanceof Array;
    }

    is.string = function STRING(target) {
        return typeof target === 'string';
    }

    is.number = function NUMBER(target) {
        return typeof target === 'number' && !isNaN(target);
    }

    is.boolean = function BOOLEAN(target) {
        return typeof target === 'boolean';
    }

    is.true = function TRUE(target) {
        return target === true;
    }

    is.false = function FALSE(target) {
        return target === false;
    }

    is.empty = function EMPTY(target) {

        if (
            (is.object(target)) ||
            (is.array(target))
        ) {
            if (Reflect.has(target, 'size')) {
                // @ts-ignore
                return target.size <= 0;
            }
            for (const key in target) {
                if (target.hasOwnProperty(key)) {
                    return false;
                }
            }
            return true;
        }

        if (is.string(target)) {
            return target.trim()[0] === undefined;
        }

        return false;
    }

    // Interfaces

    is.not = function NOT() {
        // Skip the function in call loop!
        throw new Error("Don't use the method without second command, good example: is.not.object()");
    }

    function or() {
        throw new Error("Don't use the command like first!");
    }

    or.allowed = [
        is.object,
        is.string,
        is.array,
        is.empty,
        is.boolean,
        is.true,
        is.false,
        is.number
    ];

    is.object.allowed = [
        is.empty,
        or,
        is.not
    ];
    is.boolean.allowed = [
        is.not,
        or,
    ];
    is.number.allowed = [
        is.not,
        or,
    ];
    is.true.allowed = [
        is.not,
        or,
    ];
    is.false.allowed = [
        is.not,
        or,
    ];
    is.array.allowed = [
        is.not,
        or,
        is.empty
    ];
    is.string.allowed = [
        is.not,
        or,
        is.empty
    ];
    is.empty.allowed = [
        is.not,
        or,
        is.object,
        is.string
    ];
    is.not.allowed = [
        is.object,
        is.empty,
        is.string,
        is.array,
        is.boolean,
        is.true,
        is.false,
        is.number
    ];

    Object.values(is).filter(method => 'allowed' in method).forEach((method) => setMethods(method));

    return is;
}));

console.timeEnd('Initialization time fo new engine');

const is = module.exports;

/**
 * #3
 */
console.log(is.object.empty({}));
console.log(is.object.empty({a: 1}));
console.log(is.string.empty(''));

// console.log(is.object.not.empty({a: 1}));
// console.log(is.object.not.empty({}));
// console.log(is.object.not.empty([]));

// console.log(is.object.or.string(0));
// console.log(is.string.or.number([]));
// console.log(is.string.or.number({}));
// console.log(is.string.or.number(''));
// console.log(is.string.or.number(0));
// console.log(is.string.or.number(false));
// console.log(is.string.or.number.or.boolean([]));
// console.log(is.string.or.number.or.boolean.or.object({}));
// console.log(is.string.or.number.or.boolean.or.object(''));
// console.log(is.string.or.number.or.boolean.or.object(0));
// console.log(is.string.or.number.or.boolean.or.object(false));
// console.log(is.not.string.or.number.or.boolean({}));


// const MAX_LEVEL = 25;
// let LAST_LEVEL = 0;
// let TOTAL = 0;
//
// function consoleRec(target, level = 1) {
//     // if (level === 2) {
//     //     if (target.originalName !== 'string') {
//     //         return;
//     //     }
//     //     console.log(' ');
//     // }
//     console.log('|', [].constructor(level).join('-'), target?.originalName ?? target.name);
//     TOTAL++;
//     if (level > LAST_LEVEL) {
//         LAST_LEVEL = level;
//     }
//     if (MAX_LEVEL >= level) {
//         Object.keys(target).forEach((k) => {
//             if (target[k] instanceof Function) {
//                 consoleRec(target[k], level + 1);
//             }
//         });
//     }
// }
//
// consoleRec(is);
// console.log('LAST_LEVEL: ', LAST_LEVEL, 'TOTAL: ', TOTAL);
