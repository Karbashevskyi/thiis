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

    /**
     *
     * 1. [x] is.not.object()
     * 1. [x] [not, wrapper->object]
     *
     * 2. [x] is.not.boolean.or.number()
     * 2. [x] [not, wrapper->boolean, wrapper->or, wrapper->number]
     *
     * @returns {*|boolean}
     */
    function case1_2Method() {

        if (this.currentMethod.originalName === 'or') {
            return this.nextMethod.apply(null, arguments);
        }

        if (this.currentMethod.apply(null, arguments)) {
            return false;
        }

        if (this.nextMethod.originalName === 'not') {
            return true;
        }

        return this.nextMethod.apply(null, arguments);

    }

    /**
     *
     * 3. [x] is.object.empty()
     * 3. [x] [object, wrapper->empty]
     *
     * @returns {*|boolean}
     */
    function case3Method() {

        if (['or', 'not'].includes(this.currentMethod.originalName)) {
            return this.nextMethod.apply(null, arguments);
        }

        if (this.currentMethod.apply(this, arguments)) {
            return this.nextMethod.apply(null, arguments);
        }

        return false;

    }

    /**
     *
     * 4. [x] is.object.or.string()
     * 4. [x] [object, wrapper->or, wrapper->string]
     *
     * 5. [x] is.null.or.undefined.or.empty()
     * 5. [x] [null, wrapper->or, wrapper->undefined, wrapper->or, wrapper->empty]
     *
     * @returns {*|boolean}
     */
    function case4_5Method() {

        if (MAX_LEVEL_OF_OR > 1) { // Perhaps we can delete the if and success content if we decide that MAX_LEVEL_OF_OR is always will be 1

            if (this.currentMethod.originalName !== 'or') {

                if (this.currentMethod.apply(null, arguments)) {

                    return true;

                }

            }

            return this.nextMethod.apply(null, arguments);

        } else {

            if (['or', 'not'].includes(this.currentMethod.originalName)) {
                return this.nextMethod.apply(null, arguments);
            }

            if (this.currentMethod.apply(null, arguments)) {

                return true;

            }

            return this.nextMethod.apply(null, arguments);

        }

    }

    /**
     *
     * 6. [x] is.object.not.empty()
     * 6. [x] [object, wrapper->not, wrapper->empty]
     *
     * 7. [x] is.object.not.empty.or.boolean()
     * 7. [x] [object, wrapper->not, wrapper->empty, wrapper->or, wrapper->boolean]
     *
     * 8. [x] is.object.or.string.not.empty()
     * 8. [x] [object, wrapper->or, wrapper->string, wrapper->not, wrapper->empty]
     *
     * @returns {*|boolean}
     */
    function case6_7_8Method() {

        if (this.currentMethod.apply(null, arguments)) {
            return false;
        }
        return this.nextMethod.apply(null, arguments);

    }

    function defineNewMethod(target, method, caseMethod) {

        return function () {

            /**
             * !!! ONE CONTEXT FOR ALL EXECUTION !!!
             */

            return caseMethod.apply(this, arguments);

        };

    }

    const MAX_LEVEL_OF_OR = 1; // is.array.or.map.or.set

    function setMethods(target, pathNames = []) {

        if (!('originalName' in target)) {
            // If level is 0 we target that all commands don't have originalName property.
            target.originalName = target.name.toLowerCase();
        }

        pathNames = [...pathNames, target.originalName];
        const countOfOr = pathNames.filter(name => name === 'or').length;

        const indexOfNotMethod = pathNames.indexOf('not');
        const indexOfFirstOrMethod = pathNames.indexOf('or');
        const notMethodIsFirst = indexOfNotMethod === 0;

        for (const method of target.allowed) {

            if (!('originalName' in method)) {
                // If level is 0 we know that all commands don't have originalName property.
                method.originalName = method.name.toLowerCase();
            }

            // Add more than 1 "or" to target
            if (pathNames.some(name => name !== 'or' && name === method.originalName)) {
                continue;
            }


            if (notMethodIsFirst) {

                target[method.originalName] = defineNewMethod(target, method, case1_2Method).bind({
                    nextMethod: target,
                    currentMethod: method,
                });

            } else {

                if (indexOfNotMethod > 0) {

                    target[method.originalName] = defineNewMethod(target, method, case6_7_8Method).bind({
                        nextMethod: target,
                        currentMethod: method,
                    });

                } else {

                    if (indexOfFirstOrMethod > 0) {
                        target[method.originalName] = defineNewMethod(target, method, case4_5Method).bind({
                            nextMethod: target,
                            currentMethod: method,
                        });
                    } else {

                        target[method.originalName] = defineNewMethod(target, method, case3Method).bind({
                            nextMethod: target,
                            currentMethod: method,
                        });

                    }
                }

            }

            target[method.originalName].originalName = method.originalName;
            target[method.originalName].allowed = method.allowed;

            if (countOfOr < MAX_LEVEL_OF_OR || method.originalName !== 'or') {

                target[method.originalName] = setMethods(
                    target[method.originalName],
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
        throw new Error("Don't use the method without second command, good example: is.not.object()");
    }

    function or() {
        throw new Error("Don't use the command like first!");
    }

    // Linking

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

    setMethods(is.object);
    setMethods(is.boolean);
    setMethods(is.number);
    setMethods(is.true);
    setMethods(is.false);
    setMethods(is.array);
    setMethods(is.string);
    setMethods(is.empty);
    setMethods(is.not);


    return is;
}));

console.timeEnd('Initialization time fo new engine');

const is = module.exports;

/**
 * #1 #2
 */
console.log('Case: #1 #2');
console.log('true: ', is.not.object([]));
console.log('true: ', is.not.boolean.or.number(''));
console.log('false: ', is.not.object({}));
console.log('false: ', is.not.boolean.or.number(0));
console.log('');

/**
 * #3
 */
console.log('Case: #3');
console.log('true: ', is.object.empty({}));
console.log('false: ', is.object.empty({a: 1}));
console.log('true: ', is.string.empty(''));
console.log('');

/**
 * #4 #5
 */
console.log('Case: #4 #5');
console.log('true: ', is.string.or.number(0));
console.log('true: ', is.string.or.number(''));
console.log('false: ', is.string.or.number(true));
// console.log(is.string.or.number.or.boolean(false)); // Only if MAX_LEVEL_OF_OR is more than 1
console.log('');

/**
 * #6 #7 #8
 */
console.log('Case: #6 #7 #8');
console.log('true: ', is.object.not.empty({a: 1}));
console.log('false: ', is.object.not.empty.or.boolean(true));
console.log('false: ', is.object.or.string.not.empty(''));
console.log('');


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
