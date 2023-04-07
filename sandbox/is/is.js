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

    // TODO Try another option how to build the new engine
    // TODO is.object.not.empty and in this place is only function to detect which another function to execute and gave started context to executed another function.

    /**
     *
     * is
     *  boolean: () => boolean.apply(null, arguments)
     *
     *      object: (() => methods.reduce((result, method) => method.apply(null, arguments)), false).bind({methods: [boolean, object]})
     *      number: (() => methods.reduce((result, method) => method.apply(null, arguments)), false).bind({methods: [boolean, number]})
     *      string: (() => methods.reduce((result, method) => method.apply(null, arguments)), false).bind({methods: [boolean, string]})
     *      symbol: (() => methods.reduce((result, method) => method.apply(null, arguments)), false).bind({methods: [boolean, symbol]})
     *
     *  object: () => object.apply(null, arguments)
     *
     *  ...
     *
     *  number: () => number.apply(null, arguments)
     *
     *  ...
     *
     *  string: () => string.apply(null, arguments)
     *
     *  ...
     *
     *  symbol: () => symbol.apply(null, arguments)
     *
     *  ...
     *
     *
     */

    function defineNewMethod(method) {

        return function () {

            /**
             * !!! ONE CONTEXT FOR ALL EXECUTION !!!
             */

            this.__count = (this.count ?? 0) + 1;

            this._index = this._index ?? 0;

            // TODO refactoring indexNot
            // TODO refactoring firstIndexOfOr

            if (this.indexNot > -1) {

                if (this.indexNot === 0) {

                    if (this.firstIndexOfOr === -1) {

                        /**
                         * Examples:
                         * 1. [x] is.not.object()
                         */
                        return !method.apply(this, arguments);

                    }

                    // TODO or handler
                    /**
                     * Examples:
                     * 1. [ ] is.not.object.or.string()
                     */

                } else {

                    if (this.firstIndexOfOr === -1) {

                        /**
                         * Examples:
                         * 1. [x] is.object.not.empty()
                         */
                        if (this.path[0].apply(this, arguments)) {

                            return !method.apply(this, arguments);

                        } else {

                            return false;

                        }

                    }

                    // TODO or handler
                    /**
                     * Examples:
                     * 1. [ ] is.object.not.empty.or.null()
                     * 2. [ ] is.object.or.string.not.empty()
                     */

                }

            }

            if (this.firstIndexOfOr === -1) {

                /**
                 * Examples:
                 * 1. [x] is.object.empty()
                 */
                if (this.path[0].apply(this, arguments)) {

                    return method.apply(this, arguments);

                } else {

                    return false;

                }

            }

            /**
             * Examples:
             * 1. [ ] is.object.or.string()
             * 2. [ ] is.null.or.undefined.or.empty()
             */
            if (!this?._injected) {

                // Method and first method from path list don't have any wrapper!
                if (method.apply(this, arguments) || this.path[this._index].apply(this, arguments)) {

                    return true;

                }

                this.path = this.path.filter(({originalName}) => originalName !== 'or');
            }

            this._injected = true;

            this._index++;

            return this.path[this._index]?.apply?.(this, arguments) ?? false;

        };

    }

    const MAX_LEVEL_OF_OR = 1; // is.array.or.map.or.set

    function setMethods(target, path= [], pathNames = []) {

        if (!('originalName' in target)) {
            // If level is 0 we target that all commands don't have originalName property.
            target.originalName = target.name.toLowerCase();
        }

        pathNames = [...pathNames, target.originalName];
        path = [...path, target];
        const countOfOr = pathNames.filter(name => name === 'or').length;

        // context.indexNot = context.pathNames.indexOf('NOT');
        // context.firstIndexOfOr = context.pathNames.indexOf('or');

        for (const method of target.allowed) {

            if (!('originalName' in method)) {
                // If level is 0 we know that all commands don't have originalName property.
                method.originalName = method.name.toLowerCase();
            }

            if (pathNames.some(name => name !== 'or' && name === method.originalName)) {
                continue;
            }

            target[method.originalName] = defineNewMethod(method);

            target[method.originalName].path = path;
            target[method.originalName].originalName = method.originalName;
            target[method.originalName].allowed = method.allowed;

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
        or,
        is.not,
        is.empty
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
console.log(is.object.not.empty({a: 1}));
// console.log(is.object.not.empty({}));
// console.log(is.object.not.empty([]));

console.log(is.object.or.string(0));
console.log(is.string.or.number([]));
console.log(is.string.or.number({}));
console.log(is.string.or.number(''));
console.log(is.string.or.number(0));
console.log(is.string.or.number(false));
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
