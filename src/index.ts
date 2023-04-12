import {registerInIsDecorator} from './decorators/register-in-is.decorator';
import * as thiis from './methods';
import {isConfig} from './config';

export const RegisterInIs = registerInIsDecorator;
export const IsConfig = isConfig;

export const is = thiis;

/**
 *
 * 1. [x] is.not.object()
 * 1. [x] [not, wrapper->object]
 *
 * 2. [x] is.not.boolean.or.number()
 * 2. [x] [not, wrapper->boolean, wrapper->or, wrapper->number]
 *
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

function setOriginalName(target: any): void {

    if (!('originalName' in target)) {
        // If level is 0 we target that all commands don't have originalName property.
        target.originalName = target.name.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    }

}

function setMethods(target, pathNames: string[] = []) {

    setOriginalName(target);

    pathNames = [...pathNames, target.originalName];
    const notExceededOfOr = pathNames.filter(name => name === 'or').length < MAX_LEVEL_OF_OR;

    const indexOfNotMethod = pathNames.indexOf('not');
    const indexOfFirstOrMethod = pathNames.indexOf('or');
    const notMethodIsFirst = indexOfNotMethod === 0;

    for (const method of target.allowed) {

        const context: {
            nextMethod: any;
            currentMethod: any;
            forObject?: boolean;
            forString?: boolean;
            forArray?: boolean;
            isNot?: boolean;
            isOr?: boolean;
        } = {
            nextMethod: target,
            currentMethod: method,
        };

        setOriginalName(method);

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



// Interfaces

function or() {
    throw new Error('Don\'t use the command like first!');
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

// @ts-ignore
is.object.allowed = [
    is.empty,
    or,
    is.not
];

// @ts-ignore
is.boolean.allowed = [
    is.not,
    or,
];

// @ts-ignore
is.number.allowed = [
    is.not,
    or,
];

// @ts-ignore
is.true.allowed = [
    is.not,
    or,
];

// @ts-ignore
is.false.allowed = [
    is.not,
    or,
];

// @ts-ignore
is.array.allowed = [
    is.not,
    or,
    is.empty
];

// @ts-ignore
is.string.allowed = [
    is.not,
    or,
    is.empty
];

// @ts-ignore
is.empty.allowed = [
    is.not,
    or,
    is.object,
    is.string
];

// @ts-ignore
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

// @ts-ignore
is.null.allowed = [
    is.not,
    or,
];

// @ts-ignore
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
