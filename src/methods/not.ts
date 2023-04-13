import {AllMethodsInterface} from '../interfaces/methods/all-methods.interface';
import returnError from './return-error';

export const not: AllMethodsInterface & {
    allowed: any[];
    originalName: string;
} = returnError.bind({
    message: 'Don\'t use the method without second command, good example: is.not.object()'
}) as any;


not.allowed = [];
not.originalName = 'not';
