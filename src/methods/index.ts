export {ARRAY as array} from './ARRAY';
export {BIG_INT as bigInt} from './number/BIG_INT';
export {BOOLEAN as boolean} from './boolean/BOOLEAN';
export {COMPARE as compare} from './COMPARE';
export {EMPTY as empty} from './EMPTY';
export {FALSE as false} from './boolean/FALSE';
export {FALSY as falsy} from './boolean/FALSY';
export {INSTANCEOF as instanceof} from './INSTANCEOF';
export {NULL as null} from './NULL';
export {NUMBER as number} from './number/NUMBER';
export {OBJECT as object} from './OBJECT';
export {STRING as string} from './string/STRING';
export {SYMBOL as symbol} from './SYMBOL';
export {TRUE as true} from './boolean/TRUE';
export {TRUTHY as truthy} from './boolean/TRUTHY';
export {UNDEFINED as undefined} from './UNDEFINED';
export {ZERO as zero} from './number/ZERO';
export {PRIMITIVE as primitive} from './PRIMITIVE';
export {PROMISE as promise} from './PROMISE';
export {FUNCTION as function} from './FUNCTION';
export {GENERATOR_FUNCTION as generatorFunction} from './GENERATOR_FUNCTION';
export {ASYNC_FUNCTION as asyncFunction} from './ASYNC_FUNCTION';
export {POSITIVE as positive} from './number/POSITIVE';
export {NEGATIVE as negative} from './number/NEGATIVE';
export {INFINITY as infinity} from './number/INFINITY';
export {IPV6 as ipv6} from './string/IPV6';
export {IPV4 as ipv4} from './string/IPV4';
export {MAC_ADDRESS as macAddress} from './string/MAC_ADDRESS';
export {WORD as word} from './string/WORD';
export {ODD as odd} from './number/ODD';
export {EVEN as even} from './number/EVEN';
export {LEN as len} from './LEN';
export {NUMERIC as numeric} from './number/NUMERIC';
export {INT as int} from './number/INT';
export {CHAR as char} from './string/CHAR';
export {PASCAL_CASE as pascalCase} from './string/register/PASCAL_CASE';
export {KEBAB_CASE as kebabCase} from './string/register/KEBAB_CASE';
export {CAMEL_CASE as camelCase} from './string/register/CAMEL_CASE';
export {SNAKE_CASE as snakeCase} from './string/register/SNAKE_CASE';
export {UPPER_CASE as upperCase} from './string/register/UPPER_CASE';
export {LOWER_CASE as lowerCase} from './string/register/LOWER_CASE';
export {SAFARI as safari} from './browser/SAFARI';
export {FIREFOX as firefox} from './browser/FIREFOX';
export {ANDROID as android} from './system/ANDROID';
export {PHONE as phone} from './hardware/PHONE';
export {WINDOWS as windows} from './system/WINDOWS';
export {OPERA as opera} from './browser/OPERA';
export {IPOD as ipod} from './hardware/IPOD';
export {IPHONE as iphone} from './hardware/IPHONE';
export {IPAD as ipad} from './hardware/IPAD';
export {IOS as ios} from './system/IOS';
export {IE as ie} from './browser/IE';
export {EDGE as edge} from './browser/EDGE';
export {BROWSER as browser} from './browser/BROWSER';
export {MAC as mac} from './system/MAC';
export {CHROME as chrome} from './browser/CHROME';
export {WINDOWS_PHONE as windowsPhone} from './hardware/WINDOWS_PHONE';
export {BLACKBERRY as blackberry} from './hardware/BLACKBERRY';
export {ANDROID_PHONE as androidPhone} from './hardware/ANDROID_PHONE';
export {MOBILE as mobile} from './hardware/MOBILE';
export {not} from './not';
export {HTMLElementsMethodsInterface} from '../interfaces/methods/HTML-elements.methods.interface';
export {ExternalMethodsInterface} from '../interfaces/methods/external.methods.interface';

// type LengthMethodType = typeof LEN;

// export const predefinedMethods = {
//   // Browser
//   firefox: FIREFOX,
//   opera: OPERA,
//   ie: IE,
//   edge: EDGE,
//   safari: SAFARI,
//   browser: BROWSER,
//   chrome: CHROME,
//   // System
//   ios: IOS,
//   android: ANDROID,
//   windows: WINDOWS,
//   mac: MAC,
//   // Hardware
//   phone: PHONE,
//   ipod: IPOD,
//   iphone: IPHONE,
//   ipad: IPAD,
//   windowsPhone: WINDOWS_PHONE,
//   blackberry: BLACKBERRY,
//   androidPhone: ANDROID_PHONE,
//   mobile: MOBILE,
//   // Boolean
//   boolean: BOOLEAN,
//   false: FALSE,
//   falsy: FALSY,
//   true: TRUE,
//   truthy: TRUTHY,
//   // Number
//   odd: ODD,
//   positive: POSITIVE,
//   zero: ZERO,
//   int: INT,
//   infinity: INFINITY,
//   number: NUMBER,
//   numeric: NUMERIC,
//   // String
//   string: STRING,
//   pascalCase: PASCAL_CASE,
//   upperCase: UPPER_CASE,
//   kebabCase: KEBAB_CASE,
//   macAddress: MAC_ADDRESS,
//   camelCase: CAMEL_CASE,
//   word: WORD,
//   snakeCase: SNAKE_CASE,
//   ipv4: IPV4,
//   ipv6: IPV6,
//   char: CHAR,
//   lowerCase: LOWER_CASE,
//   // Other
//   len: LEN,
//   array: ARRAY,
//   asyncFunction: ASYNC_FUNCTION,
//   bigInt: BIG_INT,
//   compare: COMPARE,
//   empty: EMPTY,
//   even: EVEN,
//   function: FUNCTION,
//   generatorFunction: GENERATOR_FUNCTION,
//   instanceof: INSTANCEOF,
//   negative: NEGATIVE,
//   null: NULL,
//   object: OBJECT,
//   primitive: PRIMITIVE,
//   promise: PROMISE,
//   symbol: SYMBOL,
//   undefined: UNDEFINED,
// };
