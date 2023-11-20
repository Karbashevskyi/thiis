import {isConfig} from '../../config';
import {NumberMethod} from '../number/number.method';

export function PhoneMethod(target: unknown = isConfig.state.screen.width): boolean {
    if (this.PhoneMethod) {
        return true;
    }
    if (NumberMethod.call(this, target)) {
        // @ts-ignore
        return this.PhoneMethod = target <= isConfig.definition.phone;
    }
    return false;
}
