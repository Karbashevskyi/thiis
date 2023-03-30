import {isConfig} from '../../config';
import {ObjectMethod} from '../object.method';
import {EmptyMethod} from '../empty.method';

export function BrowserMethod(target: unknown = isConfig.state.navigator): boolean {
    return ObjectMethod(target) && !EmptyMethod(target);
}
