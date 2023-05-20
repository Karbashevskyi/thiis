import {registerInIsDecorator} from './decorators/register-in-is.decorator';
import * as thiis from './methods';
import {isConfig} from './config';
import {or} from './methods/or';
import {AllMethodsInterface} from './interfaces/methods/all-methods.interface';

console.time('initialize');
export const RegisterInIs = registerInIsDecorator;
export const IsConfig = isConfig;

export const is: AllMethodsInterface = thiis as any;

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

    if (this.isNot || this.nextMethod.originalName === 'not') {
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

        try {

            return caseMethod.apply(this, arguments);

        } catch (e) {

            return false;

        }

    };

}

const MAX_LEVEL_OF_OR = 1; // is.array.or.map.or.set

function setMethods(target, pathNames: string[] = []) {

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

// Linking

const allowedList = Object.values(is);

or.allowed = is.not.allowed = allowedList.filter((method) => method !== is.not);

const specialAllowedListPerMethod = {
    string: [
        is.empty,
        is.not,
        or
    ],
    array: [
        is.empty,
        is.not,
        or
    ],
    object: [
        is.empty,
        is.not,
        or
    ],
    empty: [
        is.string,
        is.object,
        is.array,
        is.not,
        or
    ]
};

allowedList.forEach((method) => {
    if (!['not', 'or'].includes(method.originalName)) {

        if (method.originalName in specialAllowedListPerMethod) {
            method.allowed = specialAllowedListPerMethod[method.originalName];
        } else {
            method.allowed = [is.not, or];
        }

    }
    setMethods(method);
});

console.timeEnd('initialize');

const MAX_LEVEL = 25;
let LAST_LEVEL = 0;
let TOTAL = 0;
let strIs = '';

function consoleRec(target, level = 1) {
    // if (level === 2) {
    //     if (target.originalName !== 'string') {
    //         return;
    //     }
    //     console.log(' ');
    // }
    // console.log('|', [].constructor(level).join('-'), target?.originalName ?? target.name);
    TOTAL++;
    let strTarget = '{';
    if (level > LAST_LEVEL) {
        LAST_LEVEL = level;
    }
    if (MAX_LEVEL >= level) {
        Object.keys(target).forEach((k) => {
            if (target[k] instanceof Function) {
                strTarget += `${target[k]?.originalName ?? target[k].name}: ${consoleRec(target[k], level + 1)}`;
            }
        });
    }
    return strTarget + '},';
}

strIs = consoleRec(is);
console.log('LAST_LEVEL: ', LAST_LEVEL, 'TOTAL: ', TOTAL);

import fs from 'fs';

const filename = 'myfile.ts';
const content = `
const is = ${strIs}
`;

fs.writeFile(filename, content, (err) => {
    if (err) throw err;
    console.log(`The file ${filename} has been saved!`);
});

