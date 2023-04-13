import {not} from '../not';
import {or} from '../or';
import {isConfig} from '../../config';
import {NUMBER} from '../number/NUMBER';

export function PHONE(target: unknown = isConfig.state.screen.width): boolean {
    if (NUMBER(target)) {
        return target <= isConfig.definition.phone;
    }
    return false;
}

PHONE.allowed = [];
PHONE.originalName = 'phone';
