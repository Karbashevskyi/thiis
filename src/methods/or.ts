import {AllMethodsInterface} from '../interfaces/methods/all-methods.interface';
import returnError from './return-error';

export const or: AllMethodsInterface & {
    allowed: any[];
    originalName: string;
} = returnError.bind({
    message: 'Don\'t use the command like first!'
}) as any;

or.allowed = [];
or.originalName = 'or';
