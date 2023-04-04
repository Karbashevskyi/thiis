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

            if (context.indexNot > -1) {

                if (context.indexNot === 0) {

                    if (context.firstIndexOfOr === -1) {

                        /**
                         * Examples:
                         * 1. [x] is.not.object()
                         */
                        return !method.apply(context, arguments);

                    }

                    // TODO or handler
                    /**
                     * Examples:
                     * 1. [ ] is.not.object.or.string()
                     */

                } else {

                    if (context.firstIndexOfOr === -1) {

                        /**
                         * Examples:
                         * 1. [x] is.object.not.empty()
                         */
                        if (context.path[0].apply(context, arguments)) {

                            return !method.apply(context, arguments);

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

            if (context.firstIndexOfOr === -1) {

                /**
                 * Examples:
                 * 1. [x] is.object.empty()
                 */
                if (context.path[0].apply(context, arguments)) {

                    return method.apply(context, arguments);

                } else {

                    return false;

                }

            }

            /**
             * Examples:
             * 1. [ ] is.object.or.string()
             * 2. [ ] is.null.or.undefined.or.empty()
             * 3. [ ] is.null.or.undefined.or.string.or.number.or.symbol()
             */

            // Method and first method from path list don't have any wrapper!
            if (method.apply(context, arguments) || context.path.shift().apply(context, arguments)) {

                return true;

            }

            // 2. Current path value: [or, undefined, or]; --DeleteAllOr
            // 3. Current path value: [or, undefined, or, string, or, number, or]; --DeleteAllOr
            context.path = context.path.filter(({name}) => name !== 'or');
            // 2. Current path value: [undefined];
            // 3. Current path value: [undefined, string, number];
            context.blabla = 'blum'; // TODO delete
            // TODO remember about this!!!!!!
            // TODO for next command after first command they have wrapper and wrapper has "this" from prev!

            return context.path.shift()?.apply?.(context, arguments) ?? false;

        };

        newMethod.path = context.path;
        newMethod.allowed = method.allowed;
        // newMethod.originalName = method.name;
        Object.defineProperty(newMethod, 'name', { // TODO find way to set name in easy way
            value: method.name
        });

        return newMethod;

    }

    function setMethods(target, without = undefined) {

        let path = [...(target?.path ?? []), target];

        const context = {
            path,
            switchToIndexMethod: 0,
            reverseBoolean: false,
            result: false,
        };

        context.indexNot = context.path.findIndex(({name}) => name === 'not');
        context.firstIndexOfOr = context.path.findIndex(({name}) => name === 'or');

        for (const method of target.allowed) {
            const canBeAddedToPath = !path.some(({name}) => name !== 'or' && name === method.name);
            if (canBeAddedToPath) {
                const newMethod = defineNewMethod(method, context)
                target[method.name] = setMethods(newMethod);
            }
        }

        delete target[target.name];

        if (without) {
            delete target[without];
        }
        return target;
    }

    is.object = function object(target) {
        this.resultObject = typeof target === 'object' && target !== null && target !== Array.isArray(target);
        return this.resultObject;
    }

    is.array = function array(target) {
        this.resultArray = target instanceof Array;
        return this.resultArray;
    }

    is.string = function string(target) {
        this.resultString = typeof target === 'string';
        return this.resultString;
    }

    is.number = function number(target) {
        this.resultNumber = typeof target === 'number' && !isNaN(target);
        return this.resultNumber;
    }

    is.boolean = function boolean(target) {
        return typeof target === 'boolean';
    }

    is.empty = function empty(target) {

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

    function or() {
        throw new Error("Don't use the command like first!");
    }

    is.not = function not() {
        // Skip the function in call loop!
        throw new Error("Don't use the method without second command, good example: is.not.object()");
    }

    is.number.allowed = [
        is.not,
        or,
    ];
    is.boolean.allowed = [
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
    is.object.allowed = [
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
    or.allowed = [
        is.object,
        is.string,
        is.array,
        is.empty,
        is.boolean,
        is.number
    ];
    is.not.allowed = [
        is.object,
        is.empty,
        is.string,
        is.array,
        is.boolean,
        is.number
    ];

    setMethods(or); // Don't use is.or!
    setMethods(is.number);
    setMethods(is.boolean);
    setMethods(is.array);
    setMethods(is.string);
    setMethods(is.object);
    setMethods(is.empty);
    setMethods(is.not); // Don't use is.or!

    return is;
}));

console.timeEnd('Initialization time fo new engine');

const is = module.exports;
// console.log(is.object.not.empty({a: 1}));

// console.log(is.object.or.string(0));
// console.log(is.string.or.number.or.boolean(''));
console.log(is.string.or.number.or.boolean.or.array.or.object(false));


// const maxLevel = 6;
//
// function consoleRec(target, level = 1) {
//     if (level === 2) {
//         if (target.name !== 'string') {
//             return;
//         }
//         console.log(' ');
//     }
//     console.log('|', [].constructor(level).join('-'), target.name);
//     if (maxLevel > level) {
//         Object.keys(target).forEach((k) => {
//             if (target[k] instanceof Function) {
//                 consoleRec(target[k], level + 1);
//             }
//         });
//     }
// }
//
// consoleRec(is);
