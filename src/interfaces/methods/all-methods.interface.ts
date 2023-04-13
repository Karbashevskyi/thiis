import * as thiis from '../../methods';
import {ExternalMethodsInterface, HTMLElementsMethodsInterface} from '../../methods';

type mixTypes<T> = T & AllMethodsInterface;

export type ConvertTypeToGenericMixTypes<T> = {
    [key in keyof T]: mixTypes<T[key]>;
};

type instanceofType<T = () => void> = (target: unknown) => target is T;
type instanceofTypeMix<T = () => void> = mixTypes<instanceofType<T>>;

export type ConvertTypeToGenericInstanceOf<T> = {
    [key in keyof T]: instanceofTypeMix<T[key]>;
};

export interface AllMethodsInterface
    extends ConvertTypeToGenericMixTypes<typeof thiis>,
        ConvertTypeToGenericInstanceOf<ExternalMethodsInterface>,
        ConvertTypeToGenericInstanceOf<HTMLElementsMethodsInterface>,
        Omit<CallableFunction, 'length'> {
    Function: instanceofType;
    or: AllMethodsInterface;
    // not: AllMethodsInterface;

    // Predefined interfaces of methods which has some options
    // len_N: LengthMethodType;
    // len_gt_N_lt_N: LengthMethodType;
    // len_lt_N: LengthMethodType;
    // len_gt_N: LengthMethodType;
    // len_gte_N_lt_N: LengthMethodType;
    // len_gte_N_lte_N: LengthMethodType;
    // len_lte_N: LengthMethodType;
    // len_gte_N: LengthMethodType;
    // len_gt_N_lte_N: LengthMethodType;
    //
    // [key: string]: instanceofType | AllMethodsInterface | any;
}
