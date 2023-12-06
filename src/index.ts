import {registerInIsDecorator} from './decorators/register-in-is.decorator';
import {isConfig} from './config';
import {proxyGet} from './engine';
import {AllMethodsInterface} from './interfaces';
import {thiis} from './thiis';

export const RegisterInIs = registerInIsDecorator;
export const IsConfig = isConfig;

/**
 * @description 'is' is a proxy object that allows you to call methods from you global context
 * and from the context of the 'is' object. We apologize that there is no prepared full list of all available options
 * from the interface level, there was an attempt to add, but IDEA simply cannot stand the number of combinations
 * and does not display anything at all, so at least you can read this information.
 * We recommend visiting the documentation site, you will find the link in the readme file of the package.
 * @example
 * is.string('hello world'); // true
 * is.string_not_empty('hello world'); // true
 * is.string_not_empty(''); // false
 * is.HTMLDivElement(document.createElement('div')); // true
 * is.HTMLDivElement({}); // false
 * is.object({}); // true
 * is.object_not_empty({}); // true
 * is.len_gte_5('hello world'); // true; number 5 you can change
 * is.len_gt_3_lt_10('hello world'); // true; numbers 3 and 10 you can change
 */
export const is: AllMethodsInterface = new Proxy<any>(thiis, {
    get: proxyGet,
});
