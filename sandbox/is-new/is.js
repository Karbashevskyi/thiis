;(function (root, factory) {
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
    function case1_2() {

        if (this.isOr) {
            return this.nextMethod.apply(this, arguments);
        }

        if (this.currentMethod.apply(this, arguments)) {
            return false;
        }

        if (this.isNot) {
            return true;
        }

        return this.nextMethod.apply(this, arguments);

    }

    /**
     *
     * 3. [x] is.object.empty()
     * 3. [x] [object, wrapper->empty]
     *
     * @returns {*|boolean}
     */
    function case3() {

        if (this.isNot || this.isOr) {
            return this.nextMethod.apply(this, arguments);
        }

        if (this.currentMethod.apply(this, arguments)) {
            return this.nextMethod.apply(this, arguments);
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
    function case4_5() {

        if (MAX_LEVEL_OF_OR > 1) { // Perhaps we can delete the if and success content if we decide that MAX_LEVEL_OF_OR is always will be 1

            if (!this.isOr) {

                if (this.currentMethod.apply(this, arguments)) {
                    return true;
                }

            }

            return this.nextMethod.apply(this, arguments);

        } else {

            if (this.isNot || this.isOr) {
                return this.nextMethod.apply(this, arguments);
            }

            if (this.currentMethod.apply(this, arguments)) {
                return true;
            }

            return this.nextMethod.apply(this, arguments);

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
    function case6_7_8() {

        if (this.currentMethod.apply(this, arguments)) {
            return false;
        }
        return this.nextMethod.apply(this, arguments);

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
        const notExceededOfOr = pathNames.filter(name => name === 'or').length < MAX_LEVEL_OF_OR;

        const indexOfNotMethod = pathNames.indexOf('not');
        const indexOfFirstOrMethod = pathNames.indexOf('or');
        const notMethodIsFirst = indexOfNotMethod === 0;

        for (const method of target.allowed) {

            const context = {
                nextMethod: target,
                currentMethod: method,
            };

            if (!('originalName' in method)) {
                // If level is 0 we know that all commands don't have originalName property.
                method.originalName = method.name.toLowerCase();
            }

            // Add more than 1 "or" to target
            if (pathNames.some(name => name !== 'or' && name === method.originalName)) {
                continue;
            }


            if (notMethodIsFirst) {
                target[method.originalName] = case1_2;
            } else {
                if (indexOfNotMethod > 0) {
                    target[method.originalName] = case6_7_8;
                } else {
                    if (indexOfFirstOrMethod > 0) {
                        target[method.originalName] = case4_5;
                    } else {
                        target[method.originalName] = case3;
                    }
                }
            }

            // Additional context params per method
            if (method.originalName === 'empty') {
                context.forObject = pathNames.includes('object');
                context.forString = pathNames.includes('string');
                context.forArray = pathNames.includes('array');
            }

            context.isNot = method.originalName === 'not';
            context.isOr = method.originalName === 'or';

            target[method.originalName] = defineNewMethod(target, method, target[method.originalName]).bind(context);
            target[method.originalName].originalName = method.originalName;
            target[method.originalName].allowed = method.allowed;

            if (notExceededOfOr || method.originalName !== 'or') {
                target[method.originalName] = setMethods(
                    target[method.originalName],
                    pathNames
                );
            }

        }

        return target;

    }

    // Methods

    is.object = function OBJECT(target) {
        return typeof target === 'object' && target !== null && !Array.isArray(target);
    }

    is.array = function ARRAY(target) {
        return target instanceof Array;
    }

    is.string = function STRING(target) {
        return typeof target === 'string';
    }

    is.null = function NULL(target) {
        return target === null;
    }

    is.undefined = function UNDEFINED(target) {
        return target === undefined;
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

    function emptyObject(target) {
        for (const key in target) {
            if (target.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }

    function emptyArray(target) {
        return target.length === 0;
    }

    function emptyString(target) {
        return target.trim()[0] === undefined;
    }

    is.empty = function EMPTY(target) {

        if (this?.forObject) {
            return emptyObject(target);
        }

        if (this?.forArray) {
            return emptyArray(target);
        }

        if (this?.forString) {
            return emptyString(target);
        }

        if (is.object(target)) {
            return emptyObject(target);
        }

        if (is.array(target)) {
            return emptyArray(target);
        }

        if (is.string(target)) {
            return emptyString(target);
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
        is.number,
        is.null,
        is.undefined
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
        is.number,
        is.null,
        is.undefined
    ];

    is.null.allowed = [
        is.not,
        or,
    ];

    is.undefined.allowed = [
        is.not,
        or,
    ];

    // Initialization
    setMethods(is.object);
    setMethods(is.boolean);
    setMethods(is.number);
    setMethods(is.true);
    setMethods(is.false);
    setMethods(is.array);
    setMethods(is.string);
    setMethods(is.empty);
    setMethods(is.null);
    setMethods(is.undefined);
    setMethods(is.not);

    return is;

}));

