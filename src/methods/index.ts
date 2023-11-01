import {ArrayMethod} from './array.method';
import {BigIntMethod} from './number/bigInt.method';
import {BooleanMethod} from './boolean/boolean.method';
import {SameMethod} from './same.method';
import {EmptyMethod} from './empty.method';
import {FalseMethod} from './boolean/false.method';
import {FalsyMethod} from './boolean/falsy.method';
import {InstanceofMethod} from './instanceof.method';
import {NullMethod} from './null.method';
import {NumberMethod} from './number/number.method';
import {ObjectMethod, StrictObjectMethod} from './object.method';
import {StringMethod} from './string/string.method';
import {SymbolMethod} from './symbol.method';
import {TrueMethod} from './boolean/true.method';
import {TruthyMethod} from './boolean/truthy.method';
import {UndefinedMethod} from './undefined.method';
import {ZeroMethod} from './number/zero.method';
import {PrimitiveMethod} from './primitive.method';
import {PromiseMethod} from './promise.method';
import {AsyncFunctionMethod, FunctionMethod, GeneratorFunctionMethod} from './function.method';
import {PositiveMethod} from './number/positive.method';
import {NegativeMethod} from './number/negative.method';
import {InfinityMethod} from './number/infinity.method';
import {HTMLElementsMethodsInterface} from '../interfaces/methods/HTML-elements.methods.interface';
import {ExternalMethodsInterface} from '../interfaces/methods/external.methods.interface';
import {Ipv6Method} from './string/ipv6.method';
import {Ipv4Method} from './string/ipv4.method';
import {MacAddressMethod} from './string/mac-address.method';
import {WordMethod} from './string/word.method';
import {OddMethod} from './number/odd.method';
import {EvenMethod} from './number/even.method';
import {LenMethod} from './len.method';
import {NumericMethod} from './number/numeric.method';
import {IntMethod} from './number/int.method';
import {CharMethod} from './string/char.method';
import {PascalCaseMethod} from './string/register/pascal-case.method';
import {KebabCaseMethod} from './string/register/kebab-case.method';
import {CamelCaseMethod} from './string/register/camel-case.method';
import {SnakeCaseMethod} from './string/register/snake-case.method';
import {UpperCaseMethod} from './string/register/upper-case.method';
import {LowerCaseMethod} from './string/register/lower-case.method';
import {SafariMethod} from './browser/safari.method';
import {FirefoxMethod} from './browser/firefox.method';
import {AndroidMethod} from './system/android.method';
import {PhoneMethod} from './hardware/phone.method';
import {WindowsMethod} from './system/windows.method';
import {OperaMethod} from './browser/opera.method';
import {IpodMethod} from './hardware/ipod.method';
import {IphoneMethod} from './hardware/iphone.method';
import {IpadMethod} from './hardware/ipad.method';
import {IosMethod} from './system/ios.method';
import {IeMethod} from './browser/ie.method';
import {EdgeMethod} from './browser/edge.method';
import {BrowserMethod} from './browser/browser.method';
import {MacMethod} from './system/mac.method';
import {ChromeMethod} from './browser/chrome.method';
import {WindowsPhoneMethod} from './hardware/windows-phone.method';
import {BlackberryMethod} from './hardware/blackberry.method';
import {AndroidPhoneMethod} from './hardware/android-phone.method';
import {MobileMethod} from './hardware/mobile.method';
import {OnlySpaceMethod, SpaceMethod} from './string/space.method';
import {TodayMethod} from './string/date/today.method';

type mixTypes<T> = T;

export type ConvertTypeToGenericMixTypes<T> = {
    [key in keyof T]: mixTypes<T[key]>;
};

type instanceofType<T = () => void> = (target: unknown) => target is T;
type instanceofTypeMix<T = () => void> = mixTypes<instanceofType<T>>;

export type ConvertTypeToGenericInstanceOf<T> = {
    [key in keyof T]: instanceofTypeMix<T[key]>;
};

type LengthMethodType = typeof LenMethod;

export const predefinedMethods = {
    // Browser
    firefox: FirefoxMethod,
    opera: OperaMethod,
    ie: IeMethod,
    edge: EdgeMethod,
    safari: SafariMethod,
    browser: BrowserMethod,
    chrome: ChromeMethod,
    // System
    ios: IosMethod,
    android: AndroidMethod,
    windows: WindowsMethod,
    mac: MacMethod,
    // Hardware
    phone: PhoneMethod,
    ipod: IpodMethod,
    iphone: IphoneMethod,
    ipad: IpadMethod,
    windowsPhone: WindowsPhoneMethod,
    blackberry: BlackberryMethod,
    androidPhone: AndroidPhoneMethod,
    mobile: MobileMethod,
    // Boolean
    boolean: BooleanMethod,
    false: FalseMethod,
    falsy: FalsyMethod,
    true: TrueMethod,
    truthy: TruthyMethod,
    // Number
    odd: OddMethod,
    positive: PositiveMethod,
    zero: ZeroMethod,
    int: IntMethod,
    infinity: InfinityMethod,
    number: NumberMethod,
    numeric: NumericMethod,
    // String
    string: StringMethod,
    onlySpace: OnlySpaceMethod,
    space: SpaceMethod,
    pascalCase: PascalCaseMethod,
    upperCase: UpperCaseMethod,
    kebabCase: KebabCaseMethod,
    macAddress: MacAddressMethod,
    camelCase: CamelCaseMethod,
    word: WordMethod,
    snakeCase: SnakeCaseMethod,
    ipv4: Ipv4Method,
    ipv6: Ipv6Method,
    char: CharMethod,
    lowerCase: LowerCaseMethod,
    today: TodayMethod,
    // Other
    len: LenMethod,
    array: ArrayMethod,
    asyncFunction: AsyncFunctionMethod,
    bigInt: BigIntMethod,
    compare: SameMethod, // Deprecated, delete in the future, use 'same' instead
    same: SameMethod,
    empty: EmptyMethod,
    even: EvenMethod,
    function: FunctionMethod,
    generatorFunction: GeneratorFunctionMethod,
    instanceof: InstanceofMethod,
    negative: NegativeMethod,
    null: NullMethod,
    object: ObjectMethod,
    strictObject: StrictObjectMethod,
    primitive: PrimitiveMethod,
    promise: PromiseMethod,
    symbol: SymbolMethod,
    undefined: UndefinedMethod,
};

type DefaultType = <RETURN_TYPE>(target?: unknown, ...args: unknown[]) => target is RETURN_TYPE;

type AggregateType =
    ConvertTypeToGenericMixTypes<typeof predefinedMethods>
    & ConvertTypeToGenericInstanceOf<ExternalMethodsInterface>
    & ConvertTypeToGenericInstanceOf<HTMLElementsMethodsInterface>
    & {
    Function: instanceofType;

    // Predefined interfaces of methods which has some options
    len_N: LengthMethodType;
    len_gt_N_lt_N: LengthMethodType;
    len_lt_N: LengthMethodType;
    len_gt_N: LengthMethodType;
    len_gte_N_lt_N: LengthMethodType;
    len_gte_N_lte_N: LengthMethodType;
    len_lte_N: LengthMethodType;
    len_gte_N: LengthMethodType;
    len_gt_N_lte_N: LengthMethodType;

    object_not_empty: DefaultType;
    object_empty: DefaultType;
    string_not_empty: (target: unknown) => target is string;
    string_empty: (target: unknown) => target is string;
    array_not_empty: DefaultType;
    array_empty: DefaultType;
};

type AggregateKeys = keyof AggregateType;

export type AllMethodsInterface = AggregateType & {
    [key in `not_${AggregateKeys}`]: DefaultType;
} & {
    [key: string]: DefaultType
};
