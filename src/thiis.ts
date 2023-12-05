import {methods, depencies, dependecyToMethod} from './methods';

export function createMethod<T extends (...args: any[]) => boolean>(functionBody: string): T {
    return new Function('target', `return ${functionBody}`) as T;
}

export default {
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
    boolean: createMethod(methods.boolean),
    false: createMethod(methods.false),
    falsy: createMethod(methods.falsy),
    true: createMethod(methods.true),
    truthy: createMethod(methods.truthy),
    // // Number
    // odd: OddMethod,
    // positive: PositiveMethod,
    zero: createMethod(methods.zero),
    // int: IntMethod,
    // infinity: InfinityMethod,
    // number: NumberMethod,
    // numeric: NumericMethod,
    // String
    string: createMethod(methods.string),
    onlySpace: createMethod(dependecyToMethod(depencies.onlySpace) + methods.onlySpace),
    space: createMethod(dependecyToMethod(depencies.space) + methods.space),
    pascalCase: createMethod(dependecyToMethod(depencies.pascalCase) + methods.pascalCase),
    upperCase: createMethod(dependecyToMethod(depencies.upperCase) + methods.upperCase),
    kebabCase: createMethod(dependecyToMethod(depencies.kebabCase) + methods.kebabCase),
    macAddress: createMethod(dependecyToMethod(depencies.macAddress) + methods.macAddress),
    camelCase: createMethod(dependecyToMethod(depencies.camelCase) + methods.camelCase),
    word: createMethod(dependecyToMethod(depencies.word) + methods.word),
    snakeCase: createMethod(dependecyToMethod(depencies.snakeCase) + methods.snakeCase),
    ipv4: createMethod(dependecyToMethod(depencies.ipv4) + methods.ipv4),
    ipv6: createMethod(dependecyToMethod(depencies.ipv6) + methods.ipv6),
    char: createMethod(dependecyToMethod(depencies.char) + methods.char),
    lowerCase: createMethod(dependecyToMethod(depencies.lowerCase) + methods.lowerCase),
    // String:Date
    iso: createMethod(dependecyToMethod(depencies.iso) + methods.iso),
    isoFuture: createMethod(dependecyToMethod(depencies.isoFuture) + methods.isoFuture),
    isoPast: createMethod(dependecyToMethod(depencies.isoPast) + methods.isoPast),
    isoToday: createMethod(dependecyToMethod(depencies.isoToday) + methods.isoToday),
    isoTomorrow: createMethod(dependecyToMethod(depencies.isoTomorrow) + methods.isoTomorrow),
    isoYesterday: createMethod(dependecyToMethod(depencies.isoYesterday) + methods.isoYesterday),
    today: createMethod(dependecyToMethod(depencies.today) + methods.today),
    tomorrow: createMethod(dependecyToMethod(depencies.tomorrow) + methods.tomorrow),
    yesterday: createMethod(dependecyToMethod(depencies.yesterday) + methods.yesterday),
    // // Other
    // len: LenMethod,
    array: createMethod(`Array.isArray(target)`),
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
    null: createMethod(methods.null),
    // object: ObjectMethod,
    // strictObject: StrictObjectMethod,
    // primitive: PrimitiveMethod,
    // promise: PromiseMethod,
    symbol: createMethod(`typeof target === 'symbol'`),
    undefined: createMethod(`typeof target === 'undefined'`),

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
