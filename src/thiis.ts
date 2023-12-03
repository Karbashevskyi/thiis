import methods from './methods';

export function createMethod<T extends (...args: any[]) => boolean>(functionBody: string): T {
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
    onlySpace: createMethod(_AND_([methods.string, methods.onlySpace])),
    space: createMethod(_AND_([methods.string, methods.space])),
    pascalCase: createMethod(_AND_([methods.string, methods.pascalCase])),
    upperCase: createMethod(_AND_([methods.string, methods.upperCase])),
    kebabCase: createMethod(_AND_([methods.string, methods.kebabCase])),
    macAddress: createMethod(_AND_([methods.string, methods.macAddress])),
    camelCase: createMethod(_AND_([methods.string, methods.camelCase])),
    word: createMethod(_AND_([methods.string, methods.word])),
    snakeCase: createMethod(_AND_([methods.string, methods.snakeCase])),
    ipv4: createMethod(_AND_([methods.string, methods.ipv4])),
    ipv6: createMethod(_AND_([methods.string, methods.ipv6])),
    char: createMethod(_AND_([methods.string, methods.char])),
    lowerCase: createMethod(_AND_([methods.string, methods.lowerCase])),
    // String:Date
    iso: createMethod(_AND_([methods.string, methods.iso])),
    isoFuture: createMethod(_AND_([methods.string, methods.iso, methods.isoFuture])),
    isoPast: createMethod(_AND_([methods.string, methods.iso, methods.isoPast])),
    isoToday: createMethod(_AND_([methods.string, methods.iso, methods.isoToday])),
    isoTomorrow: createMethod(_AND_([methods.string, methods.iso, methods.isoTomorrow])),
    isoYesterday: createMethod(_AND_([methods.string, methods.iso, methods.isoYesterday])),
    today: createMethod(_AND_([methods.string, methods.iso, methods.today])),
    tomorrow: createMethod(_AND_([methods.string, methods.iso, methods.tomorrow])),
    yesterday: createMethod(_AND_([methods.string, methods.iso, methods.yesterday])),
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
