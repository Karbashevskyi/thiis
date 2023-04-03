console.time('Initialization time fo new engine');
;(function(root, factory) {    // eslint-disable-line no-extra-semi
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(function() {
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
}(this, function() {

//
// // Temporary place
//     function getResult(result, target) {
//
//         // const recurensiveCall = (method, index, path) => {
//         //     if (index === path.length) {
//         //         return method;
//         //     }
//         //     return recurensiveCall(path[index], index + 1, path)
//         // };
//         // const method = recurensiveCall(this.path[0], 1, this.path)
//
//         // if (method === is.or) {
//         //     if (result === true) { // todo is.true
//         //         return result;
//         //     }
//         // }
//
//         console.log(this);
//
//         const firstMethod = this.path.shift();
//
//         return firstMethod.call(this, target);
//     }
// function wrapper(result, target) {
//     if (this?.path) {
//         const recurensiveCall = (method, index, path) => {
//             if (index === path.length) {
//                 return method;
//             }
//             return recurensiveCall(path[index], index + 1, path)
//         };
//         const method = recurensiveCall(this.path[0], 1, this.path)
//         if (method === is.or) {
//             if (result === true) { // todo is.true
//                 return result;
//             }
//         }
//         return method(target);
//     }
//
//     return result;
// }
// function getDecide(target, lastMethod) {
//     if (this?.path) {
//
//         const commandList = [...this.path, lastMethod];
//
//         const indexNot = commandList.findIndex(method => method.name === is.not.name);
//         const foundIndexNot = indexNot > -1;
//         let result;
//
//         for (let index = 0; index < commandList.length; index++) {
//             if (indexNot === index) {
//                 continue;
//             }
//             /**
//              * Examples:
//              * 1. [ ] is.object()
//              * 2. [ ] is.not.object()
//              * 3. [ ] is.object.empty()
//              * 4. [ ] is.object.or.string()
//              * 5. [ ] is.not.object.or.string()
//              * 6. [ ] is.object.not.empty.or.null({a: 1})
//              * 7. [ ] is.null.or.undefined.or.empty()
//              * 8. [ ] is.object.or.string.not.empty()
//              */
//             result = commandList[index].call(null, target);
//             if (commandList.length - 1 === index) {
//                 // Is last interaction
//                 // Negative cases for examples #1 and #2.
//                 // And
//                 // Success cases for examples: #1, #2, #3.
//                 return foundIndexNot && index > indexNot ? !result : result;
//             } else {
//                 // Negative case for example #3.
//                 if (commandList[index + 1].name === is.or.name) {
//                     // If we have "not" before "or" then we need to have only one negative result
//                     // If we don't have "not" before "or" then we need to have only one positive
//                     if (result) {
//                         if (foundIndexNot) {
//                             if (index > indexNot) {
//                                 return false;
//                             } else {
//                                 index = indexNot;
//                             }
//                         } else {
//                             return true;
//                         }
//                     } else {
//                         index = index + 1;
//                     }
//                 } else {
//                     if (result) {
//                         if (foundIndexNot) {
//                             // Example #6
//                             index = indexNot;
//                         }
//                     } else {
//                         return false;
//                     }
//                 }
//             }
//         }
//
//         return false;
//
//     }
//     throw new Error('Empty path!');
// }

// Methods
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

                    /**
                     * Examples:
                     * 1. [x] is.not.object()
                     */
                    return !method.apply(null, arguments);

                    // TODO or handler
                    /**
                     * Examples:
                     * 1. [ ] is.not.object.or.string()
                     */

                } else {

                    /**
                     * Examples:
                     * 1. [x] is.object.not.empty()
                     */
                    if (context.path[0].apply(null, arguments)) {

                        return !method.apply(null, arguments);

                    } else {

                        return false;

                    }

                    // TODO or handler
                    /**
                     * Examples:
                     * 1. [ ] is.object.not.empty.or.null()
                     * 2. [ ] is.object.or.string.not.empty()
                     */

                }

            } else {

                /**
                 * Examples:
                 * 1. [x] is.object.empty()
                 */
                if (context.path[0].apply(null, arguments)) {

                    return method.apply(null, arguments);

                } else {

                    return false;

                }

                // TODO or handler
                /**
                 * Examples:
                 * 2. [ ] is.object.or.string()
                 * 3. [ ] is.null.or.undefined.or.empty()
                 */

            }

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

        let path = [target];

        if (Reflect.has(target, 'path')) {

            path = [...target.path, target]; // TODO refactoring

        }

        const context = {
            path,
            switchToIndexMethod: 0,
            reverseBoolean: false,
            result: false,
            results: {}
        };

        context.indexNot = context.path.findIndex(({name}) => name === 'not');
        // TODO add firstIndexOfOr

        for (const method of target.allowed) {
            const canBeAddedToPath = !path.some(pathMethod => {
                return pathMethod?.name?.search(method.name) > -1;
            });
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
        return typeof target === 'object' && target !== null && target !== Array.isArray(target);
    }

// is.array = function array(target) {
//     if (this?.path) {
//         return getDecide.call(this, target, array);
//     }
//     return target instanceof Array;
// }

    is.string = function string(target) {
        return typeof target === 'string';
    }

// is.number = function number(target) {
//     if (this?.path) {
//         return getDecide.call(this, target, number);
//     }
//     return typeof target === 'number' && !isNaN(target);
// }
//
// is.boolean = function boolean(target) {
//     if (this?.path) {
//         return getDecide.call(this, target, boolean);
//     }
//     return typeof target === 'boolean';
// }

    is.empty = function empty(target) {

        if (is.string(target)) {
            return target.trim()[0] === undefined;
        }

        // TODO check if this.results.object || this.results.array || this.results.object.string
        // if (is.object(target) || is.array(target)) {
        if (is.object(target)) {
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
        return false;
    }

// Interfaces

// is.or = function or(target) {
//     if (this?.path) {
//         return getDecide.call(this, target, or);
//     }
//     throw new Error("Don't use the command like first!");
// }

    is.not = function not() {
        // Skip the function in call loop!
        throw new Error("Don't use the method without second command, good example: is.not.object()");
    }


// is.number.allowed = [is.not];
// is.boolean.allowed = [is.not];
// is.array.allowed = [is.not];
    is.string.allowed = [is.not, is.empty];
    is.object.allowed = [is.not, is.empty];
    is.empty.allowed = [
        is.not,
        is.object,
        is.string
    ]; // is.object.empty, is.string.empty
// is.or.allowed = [is.object, is.string, is.array, is.empty, is.boolean, is.number];
    is.not.allowed = [
        is.object,
        is.empty,
        // is.string,
        // is.array,
        // is.boolean,
        // is.number
    ];

// setMethods(is.number);
// setMethods(is.boolean);
// setMethods(is.array);
// setMethods(is.or); // Don't use is.or!
    setMethods(is.string);
    setMethods(is.object);
    setMethods(is.empty);
    setMethods(is.not); // Don't use is.or!

    return is;
}));

console.timeEnd('Initialization time fo new engine');
