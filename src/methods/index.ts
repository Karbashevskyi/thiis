import { ArrayMethod } from './array.method';
import { BigIntMethod } from './number/bigInt.method';
import { BooleanMethod } from './boolean/boolean.method';
import { CompareMethod } from './compare.method';
import { EmptyMethod } from './empty.method';
import { FalseMethod } from './boolean/false.method';
import { FalsyMethod } from './boolean/falsy.method';
import { InstanceofMethod } from './instanceof.method';
import { NullMethod } from './null.method';
import { NumberMethod } from './number/number.method';
import { ObjectMethod } from './object.method';
import { StringMethod } from './string/string.method';
import { SymbolMethod } from './symbol.method';
import { TrueMethod } from './boolean/true.method';
import { TruthyMethod } from './boolean/truthy.method';
import { UndefinedMethod } from './undefined.method';
import { ZeroMethod } from './number/zero.method';
import { PrimitiveMethod } from './primitive.method';
import { PromiseMethod } from './promise.method';
import { AsyncFunctionMethod, FunctionMethod, GeneratorFunctionMethod } from './function.method';
import { PositiveMethod } from './number/positive.method';
import { NegativeMethod } from './number/negative.method';
import { InfinityMethod } from './number/infinity.method';
import { HTMLElementsMethodsInterface } from '../interfaces/methods/HTML-elements.methods.interface';
import { ExternalMethodsInterface } from '../interfaces/methods/external.methods.interface';
import { Ipv6Method } from './string/ipv6.method';
import { Ipv4Method } from './string/ipv4.method';
import { MacAddressMethod } from './string/mac-address.method';
import { WordMethod } from './string/word.method';
import { OddMethod } from './number/odd.method';
import { EvenMethod } from './even.method';
import { LenMethod } from './len.method';
import { NumericMethod } from './number/numeric.method';
import { IntMethod } from './number/int.method';
import { CharMethod } from './string/char.method';
import { PascalCaseMethod } from './string/register/pascal-case.method';
import { KebabCaseMethod } from './string/register/kebab-case.method';
import { CamelCaseMethod } from './string/register/camel-case.method';
import { SnakeCaseMethod } from './string/register/snake-case.method';
import { UpperCaseMethod } from './string/register/upper-case.method';
import {LowerCaseMethod} from './string/register/lower-case.method';
import {SafariMethod} from './browser/safari.method';
import {FirefoxMethod} from './browser/firefox.method';
import {AndroidMethod} from './system/android.method';
import {PhoneMethod} from './hardware/phone.method';
import {WindowsMethod} from './system/windows.method';

type mixTypes<T> = T & AllMethodsInterface;

export type ConvertTypeToGenericMixTypes<T> = {
  [key in keyof T]: mixTypes<T[key]>;
};

type instanceofType<T = () => void> = (argument: unknown) => argument is T;
type instanceofTypeMix<T = () => void> = mixTypes<instanceofType<T>>;

export type ConvertTypeToGenericInstanceOf<T> = {
  [key in keyof T]: instanceofTypeMix<T[key]>;
};

type LengthMethodType = typeof LenMethod;

export const predefinedMethods = {
  android: AndroidMethod,
  len: LenMethod,
  lowerCase: LowerCaseMethod,
  array: ArrayMethod,
  asyncFunction: AsyncFunctionMethod,
  bigInt: BigIntMethod,
  boolean: BooleanMethod,
  camelCase: CamelCaseMethod,
  char: CharMethod,
  compare: CompareMethod,
  empty: EmptyMethod,
  even: EvenMethod,
  false: FalseMethod,
  falsy: FalsyMethod,
  firefox: FirefoxMethod,
  function: FunctionMethod,
  generatorFunction: GeneratorFunctionMethod,
  infinity: InfinityMethod,
  instanceof: InstanceofMethod,
  int: IntMethod,
  ipv4: Ipv4Method,
  ipv6: Ipv6Method,
  kebabCase: KebabCaseMethod,
  macAddress: MacAddressMethod,
  negative: NegativeMethod,
  null: NullMethod,
  number: NumberMethod,
  numeric: NumericMethod,
  object: ObjectMethod,
  odd: OddMethod,
  pascalCase: PascalCaseMethod,
  phone: PhoneMethod,
  upperCase: UpperCaseMethod,
  positive: PositiveMethod,
  snakeCase: SnakeCaseMethod,
  primitive: PrimitiveMethod,
  promise: PromiseMethod,
  safari: SafariMethod,
  string: StringMethod,
  symbol: SymbolMethod,
  true: TrueMethod,
  truthy: TruthyMethod,
  undefined: UndefinedMethod,
  word: WordMethod,
  windows: WindowsMethod,
  zero: ZeroMethod,
};

export interface AllMethodsInterface
  extends ConvertTypeToGenericMixTypes<typeof predefinedMethods>,
    ConvertTypeToGenericInstanceOf<ExternalMethodsInterface>,
    ConvertTypeToGenericInstanceOf<HTMLElementsMethodsInterface>,
    Omit<CallableFunction, 'length'> {
  Function: instanceofType;
  or: AllMethodsInterface;
  not: AllMethodsInterface;

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

  [key: string]: instanceofType | AllMethodsInterface | any;
}
