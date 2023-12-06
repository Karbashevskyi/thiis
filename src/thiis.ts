import {dependencies, methods} from './methods';
import {CommandType} from './types/commands.type';
import {isConfig} from './config';

export const createMethod = <T extends (...args: any[]) => boolean>(...functionBodies: string[]): T => {
    return new Function('target', `return ${functionBodies.join(' && ')}`) as T;
}

function findInGlobalContext(command: string): CommandType {
    if (isConfig.useGlobalContext) {
        return (
            isConfig.globalContext[command] ||
            (() => {
                return false;
            })
        );
    }
    return () => {
        return false;
    };
}

const getFunctionBody = (commandName: string) => {
    // TODO: InstanceofMethod.bind({classRef: findInGlobalContext(commandName)}) into string
    if (!commandName) {
        return '';
    }
    if (dependencies[commandName]) {
        return `((${buildFunctionBody(dependencies[commandName])}) && ${methods[commandName]})`;
    }
    return `(${methods[commandName]})`;
}

export const buildFunctionBody = (name: string) => {
    const methodNames = name.split('_');
    return methodNames.reduce((acc: string, methodName: string, currentIndex: number) => {
        if (methodName === 'not') {
            return `${acc}!`;
        }
        if (methodName === 'or') {
            return `(${acc})||`;
        }
        if (currentIndex === 0) {
            return getFunctionBody(methodName);
        }
        if (acc[acc.length - 1] === '|') {
            return `${acc} ${getFunctionBody(methodName)}`;
        }
        if (acc.length < 2) {
            return acc + getFunctionBody(methodName);
        }
        if (acc[acc.length - 1] === '!') {
            return `(${acc.slice(0, acc.length - 1)}) && !${getFunctionBody(methodName)}`;
        }
        return `(${acc}) && ${getFunctionBody(methodName)}`;
    }, '');
}

export const thiis = {
    // Browser
    // firefox: FirefoxMethod,
    // opera: OperaMethod,
    // ie: IeMethod,
    // edge: EdgeMethod,
    // safari: SafariMethod,
    // browser: BrowserMethod,
    // chrome: ChromeMethod,
    // // System
    // ios: IosMethod,
    // android: AndroidMethod,
    // windows: WindowsMethod,
    // mac: MacMethod,
    // // Hardware
    // phone: PhoneMethod,
    // ipod: IpodMethod,
    // iphone: IphoneMethod,
    // ipad: IpadMethod,
    // windowsPhone: WindowsPhoneMethod,
    // blackberry: BlackberryMethod,
    // androidPhone: AndroidPhoneMethod,
    // mobile: MobileMethod,
    // Boolean
    // boolean: createMethod(methods.boolean),
    // false: createMethod(methods.false),
    // falsy: createMethod(methods.falsy),
    // true: createMethod(methods.true),
    // truthy: createMethod(methods.truthy),
    // // Number
    // odd: OddMethod,
    // positive: PositiveMethod,
    // zero: createMethod(methods.zero),
    // int: IntMethod,
    // infinity: InfinityMethod,
    // number: NumberMethod,
    // numeric: NumericMethod,
    // String
    string: createMethod(methods.string),
    onlySpace: createMethod(buildFunctionBody(dependencies.onlySpace), methods.onlySpace),
    space: createMethod(buildFunctionBody(dependencies.space), methods.space),
    pascalCase: createMethod(buildFunctionBody(dependencies.pascalCase), methods.pascalCase),
    upperCase: createMethod(buildFunctionBody(dependencies.upperCase), methods.upperCase),
    kebabCase: createMethod(buildFunctionBody(dependencies.kebabCase), methods.kebabCase),
    macAddress: createMethod(buildFunctionBody(dependencies.macAddress), methods.macAddress),
    camelCase: createMethod(buildFunctionBody(dependencies.camelCase), methods.camelCase),
    word: createMethod(buildFunctionBody(dependencies.word), methods.word),
    snakeCase: createMethod(buildFunctionBody(dependencies.snakeCase), methods.snakeCase),
    ipv4: createMethod(buildFunctionBody(dependencies.ipv4), methods.ipv4),
    ipv6: createMethod(buildFunctionBody(dependencies.ipv6), methods.ipv6),
    char: createMethod(buildFunctionBody(dependencies.char), methods.char),
    lowerCase: createMethod(buildFunctionBody(dependencies.lowerCase), methods.lowerCase),
    // String:Date
    iso: createMethod(buildFunctionBody(dependencies.iso), methods.iso),
    isoFuture: createMethod(buildFunctionBody(dependencies.isoFuture), methods.isoFuture),
    isoPast: createMethod(buildFunctionBody(dependencies.isoPast), methods.isoPast),
    isoToday: createMethod(buildFunctionBody(dependencies.isoToday), methods.isoToday),
    isoTomorrow: createMethod(buildFunctionBody(dependencies.isoTomorrow), methods.isoTomorrow),
    isoYesterday: createMethod(buildFunctionBody(dependencies.isoYesterday), methods.isoYesterday),
    today: createMethod(buildFunctionBody(dependencies.today), methods.today),
    tomorrow: createMethod(buildFunctionBody(dependencies.tomorrow), methods.tomorrow),
    yesterday: createMethod(buildFunctionBody(dependencies.yesterday), methods.yesterday),
    // // Other
    // len: LenMethod,
    // array: createMethod(`Array.isArray(target)`),
    // asyncFunction: AsyncFunctionMethod,
    // bigInt: createMethod(),
    // compare: SameMethod, // Deprecated, delete in the future, use 'same' instead
    // same: SameMethod,
    // empty: EmptyMethod,
    // even: EvenMethod,
    // function: FunctionMethod,
    // generatorFunction: GeneratorFunctionMethod,
    // instanceof: InstanceofMethod,
    // negative: NegativeMethod,
    // null: createMethod(methods.null),
    // object: ObjectMethod,
    // strictObject: StrictObjectMethod,
    // primitive: PrimitiveMethod,
    // promise: PromiseMethod,
    // symbol: createMethod(`typeof target === 'symbol'`),
    // undefined: createMethod(`typeof target === 'undefined'`),

    // Predefined combinations of methods
    // object_not_empty<T>(target: unknown): target is T {
    //   return ObjectMethod(target) && !ObjectEmptyMethodExecute(target);
    // },
    // object_empty<T>(target: unknown): target is T {
    //   return ObjectEmptyMethod(target);
    // },
    // string_not_empty<T>(target: unknown): target is T {
    //   return StringMethod(target) && !StringEmptyMethodExecute(target);
    // },
    // string_empty<T>(target: unknown): target is T {
    //   return StringEmptyMethod(target);
    // },
    // array_not_empty<T>(target: unknown): target is T {
    //   return ArrayMethod(target) && !ArrayEmptyMethodExecute(target);
    // },
    // array_empty<T>(target: unknown): target is T {
    //   return ArrayEmptyMethod(target);
    // },
}
