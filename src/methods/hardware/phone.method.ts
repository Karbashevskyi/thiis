import { isConfig } from '../../config';
import { NumberMethod } from '../number/number.method';

export function PhoneMethod(target: unknown = isConfig.state.screen.width): boolean {
  if (NumberMethod(target)) {
    return target <= isConfig.definition.phone;
  }
  return false;
}
