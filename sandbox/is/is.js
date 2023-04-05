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

    function defineNewMethod(method, context, newMethod) {

        newMethod = function () {
            /**
             * This is methods loop!
             */

            /**
             * is.object.not.empty
             * path: [object, not, empty]
             * first call of the function always on the last method from the path list (empty).
             */

            /**
             * 1. Check first method from the list and if is true, continue execution of method from list.
             * 2. If current method is "not" skip then and go to the next one.
             * 3. Check if current method has property in context (this.underNot) if true result of the method must be reverse.
             */

            const correctContext = this?.injected ? this.context : context;

            if (correctContext.indexNot > -1) {

                if (correctContext.indexNot === 0) {

                    if (correctContext.firstIndexOfOr === -1) {

                        /**
                         * Examples:
                         * 1. [x] is.not.object()
                         */
                        return !method.apply(correctContext, arguments);

                    }

                    // TODO or handler
                    /**
                     * Examples:
                     * 1. [ ] is.not.object.or.string()
                     */

                } else {

                    if (correctContext.firstIndexOfOr === -1) {

                        /**
                         * Examples:
                         * 1. [x] is.object.not.empty()
                         */
                        if (correctContext.path[0].apply(correctContext, arguments)) {

                            return !method.apply(correctContext, arguments);

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

            if (correctContext.firstIndexOfOr === -1) {

                /**
                 * Examples:
                 * 1. [x] is.object.empty()
                 */
                if (correctContext.path[0].apply(correctContext, arguments)) {

                    return method.apply(correctContext, arguments);

                } else {

                    return false;

                }

            }

            /**
             * Examples:
             * 1. [ ] is.object.or.string()
             * 2. [ ] is.null.or.undefined.or.empty()
             */
            if (!this?.injected) {

                // Method and first method from path list don't have any wrapper!
                if (method.apply(correctContext, arguments) || correctContext.path.shift().apply(correctContext, arguments)) {

                    return true;

                }

                correctContext.pathNames.shift();
                correctContext.path = correctContext.path.filter(({originalName}) => originalName !== 'or');
            }

            return correctContext.path.shift()?.apply?.(
                {
                    context: correctContext,
                    injected: true
                },
                arguments) ?? false;

        };

        newMethod.path = context.path;
        newMethod.pathNames = context.pathNames;
        newMethod.originalName = method?.originalName ?? method.name;

        return newMethod;

    }

    const MAX_LEVEL_OF_OR = 2; // is.array.or.map.or.set

    function setMethods(target, allowed, without = undefined, level = 0) {

        const context = {
            path: [...(target?.path ?? []), target],
            pathNames: [...(target?.pathNames ?? []), target.originalName],
        };

        if (!level) {
            // If level is 0 we know that all commands don't have originalName property.
            target.originalName = target.name.toLowerCase();
        } else {
            console.log('next level')
        }

        context.indexNot = context.pathNames.indexOf('NOT');
        context.firstIndexOfOr = context.pathNames.indexOf('or');

        for (const method of allowed) {
            const canBeAddedToPath = !context.pathNames.some(name => name !== 'or' && name === method.originalName);
            if (canBeAddedToPath) {

                if (target.pathNames?.includes('or')) {
                    if (target.pathNames.filter(name => name === 'or').length === MAX_LEVEL_OF_OR) {
                        continue;
                    }
                }

                const newMethod = defineNewMethod(method, context)
                target[method.originalName] = setMethods(newMethod, allowed.filter(({originalName}) => originalName !== method.originalName), undefined, level + 1);
            }
        }

        if (without) {
            delete target[without];
        }
        return target;
    }

    is.object = function OBJECT(target) {
        this.resultObject = typeof target === 'object' && target !== null && !Array.isArray(target);
        return this.resultObject;
    }

    is.array = function ARRAY(target) {
        this.resultArray = target instanceof Array;
        return this.resultArray;
    }

    is.string = function STRING(target) {
        this.resultString = typeof target === 'string';
        return this.resultString;
    }

    is.number = function NUMBER(target) {
        this.resultNumber = typeof target === 'number' && !isNaN(target);
        return this.resultNumber;
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
            (this?.resultObject ?? is.object(target)) ||
            (this?.resultArray ?? is.array(target))
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

        if (this?.resultString ?? is.string(target)) {
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

    setMethods(or, [
        is.object,
        is.string,
        is.array,
        is.empty,
        is.boolean,
        is.true,
        is.false,
        is.number
    ]); // Don't use is.or!

    setMethods(is.number,  [
        is.not,
        or,
    ]);
    setMethods(is.boolean, [
        is.not,
        or,
    ]);
    setMethods(is.true, [
        is.not,
        or,
    ]);
    setMethods(is.false, [
        is.not,
        or,
    ]);
    setMethods(is.array, [
        is.not,
        or,
        is.empty
    ]);
    setMethods(is.string, [
        is.not,
        or,
        is.empty
    ]);
    setMethods(is.object, [
        is.not,
        or,
        is.empty
    ]);
    setMethods(is.empty, [
        is.not,
        or,
        is.object,
        is.string
    ]);
    setMethods(is.not, [
        is.object,
        is.empty,
        is.string,
        is.array,
        is.boolean,
        is.true,
        is.false,
        is.number
    ]); // Don't use is.or!

    return is;
}));

console.timeEnd('Initialization time fo new engine');

const is = module.exports;
// console.log(is.object.not.empty({a: 1}));

// console.log(is.object.or.string(0));
// console.log(is.string.or.number.or.boolean([]));
// console.log(is.string.or.number.or.boolean({}));
// console.log(is.string.or.number.or.boolean(''));
// console.log(is.string.or.number.or.boolean(0));
// console.log(is.string.or.number.or.boolean(false));
// console.log(is.string.or.number.or.boolean.or.object([]));
// console.log(is.string.or.number.or.boolean.or.object({}));
// console.log(is.string.or.number.or.boolean.or.object(''));
// console.log(is.string.or.number.or.boolean.or.object(0));
// console.log(is.string.or.number.or.boolean.or.object(false));
// console.log(is.not.string.or.number.or.boolean({}));


const MAX_LEVEL = 10;
let TOTAL = 0;

function consoleRec(target, level = 1) {
    // if (level === 2) {
    //     if (target.name !== 'string') {
    //         return;
    //     }
    //     console.log(' ');
    // }
    console.log('|', [].constructor(level).join('-'), target.originalName);
    TOTAL++;
    if (MAX_LEVEL >= level) {
        Object.keys(target).forEach((k) => {
            if (target[k] instanceof Function) {
                consoleRec(target[k], level + 1);
            }
        });
    }
}

consoleRec(is);
console.log(TOTAL);
