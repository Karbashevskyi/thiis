import StringFunctionBodies from './string.method';

function createMethod<T extends (...args: any[]) => boolean>(functionBody: string): T {
    return new Function('target', `return ${functionBody}`) as T;
}

const _AND_ = (functionBodies: string[]): string => {
    return functionBodies.join(' && ');
};

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
    // // Boolean
    // boolean: BooleanMethod,
    // false: FalseMethod,
    // falsy: FalsyMethod,
    // true: TrueMethod,
    // truthy: TruthyMethod,
    // // Number
    // odd: OddMethod,
    // positive: PositiveMethod,
    zero: createMethod(`target === 0`),
    // int: IntMethod,
    // infinity: InfinityMethod,
    // number: NumberMethod,
    // numeric: NumericMethod,
    // String
    string: createMethod(StringFunctionBodies.string),
    onlySpace: createMethod(_AND_([StringFunctionBodies.string, StringFunctionBodies.onlySpace])),
    space: createMethod(_AND_([StringFunctionBodies.string, StringFunctionBodies.space])),
    pascalCase: createMethod(_AND_([StringFunctionBodies.string, StringFunctionBodies.pascalCase])),
    upperCase: createMethod(_AND_([StringFunctionBodies.string, StringFunctionBodies.upperCase])),
    kebabCase: createMethod(_AND_([StringFunctionBodies.string, StringFunctionBodies.kebabCase])),
    macAddress: createMethod(_AND_([StringFunctionBodies.string, StringFunctionBodies.macAddress])),
    camelCase: createMethod(_AND_([StringFunctionBodies.string, StringFunctionBodies.camelCase])),
    word: createMethod(_AND_([StringFunctionBodies.string, StringFunctionBodies.word])),
    snakeCase: createMethod(_AND_([StringFunctionBodies.string, StringFunctionBodies.snakeCase])),
    ipv4: createMethod(_AND_([StringFunctionBodies.string, StringFunctionBodies.ipv4])),
    ipv6: createMethod(_AND_([StringFunctionBodies.string, StringFunctionBodies.ipv6])),
    char: createMethod(_AND_([StringFunctionBodies.string, StringFunctionBodies.char])),
    lowerCase: createMethod(_AND_([StringFunctionBodies.string, StringFunctionBodies.lowerCase])),
    // String:Date
    iso: createMethod(_AND_([StringFunctionBodies.string, StringFunctionBodies.iso])),
    isoFuture: createMethod(_AND_([StringFunctionBodies.string, StringFunctionBodies.iso, StringFunctionBodies.isoFuture])),
    isoPast: createMethod(_AND_([StringFunctionBodies.string, StringFunctionBodies.iso, StringFunctionBodies.isoPast])),
    isoToday: createMethod(_AND_([StringFunctionBodies.string, StringFunctionBodies.iso, StringFunctionBodies.isoToday])),
    isoTomorrow: createMethod(_AND_([StringFunctionBodies.string, StringFunctionBodies.iso, StringFunctionBodies.isoTomorrow])),
    isoYesterday: createMethod(_AND_([StringFunctionBodies.string, StringFunctionBodies.iso, StringFunctionBodies.isoYesterday])),
    today: createMethod(_AND_([StringFunctionBodies.string, StringFunctionBodies.iso, StringFunctionBodies.today])),
    tomorrow: createMethod(_AND_([StringFunctionBodies.string, StringFunctionBodies.iso, StringFunctionBodies.tomorrow])),
    yesterday: createMethod(_AND_([StringFunctionBodies.string, StringFunctionBodies.iso, StringFunctionBodies.yesterday])),
    // // Other
    // len: LenMethod,
    array: createMethod(`Array.isArray(target)`),
    // asyncFunction: AsyncFunctionMethod,
    bigInt: createMethod(),
    // compare: SameMethod, // Deprecated, delete in the future, use 'same' instead
    // same: SameMethod,
    // empty: EmptyMethod,
    // even: EvenMethod,
    // function: FunctionMethod,
    // generatorFunction: GeneratorFunctionMethod,
    // instanceof: InstanceofMethod,
    // negative: NegativeMethod,
    null: createMethod(`target === null`),
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
