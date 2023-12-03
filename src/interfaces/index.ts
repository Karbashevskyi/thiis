import {ExternalMethodsInterface} from './methods/external.methods.interface';
import {HTMLElementsMethodsInterface} from './methods/HTML-elements.methods.interface';
import thiis from '../methods';
import {LenMethod} from '../methods/len.method';


type mixTypes<T> = T;

type instanceofType<T = () => void> = (target: unknown) => target is T;
type instanceofTypeMix<T = () => void> = mixTypes<instanceofType<T>>;

export type ConvertTypeToGenericInstanceOf<T> = {
    [key in keyof T]: instanceofTypeMix<T[key]>;
};

type LengthMethodType = typeof LenMethod;

type DefaultType = <RETURN_TYPE>(target?: unknown, ...args: unknown[]) => target is RETURN_TYPE;
type PredefinedMethodsType = typeof thiis;
type AggregateType =
    ConvertTypeToGenericInstanceOf<ExternalMethodsInterface> &
    ConvertTypeToGenericInstanceOf<HTMLElementsMethodsInterface> & {
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
    [key in `${keyof PredefinedMethodsType}_${AggregateKeys}`]: DefaultType;
} & {
    [key in `${keyof PredefinedMethodsType}_${keyof PredefinedMethodsType}`]: DefaultType;
} & {
    [key in `${keyof PredefinedMethodsType}_or_${keyof PredefinedMethodsType}`]: DefaultType;
} & {
    [key in `${keyof PredefinedMethodsType}_not_${keyof PredefinedMethodsType}`]: DefaultType;
} & {
    [key in keyof PredefinedMethodsType]: DefaultType;
} & {
    [key: string]: DefaultType;
};
