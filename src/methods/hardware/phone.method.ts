import { isConfig } from '../../config';
import { NumberMethod } from '../number/number.method';

export function PhoneMethod(target: unknown = isConfig.state.screen.width): boolean {
  if (NumberMethod.apply(this, [target])) {
    return (target as number) <= isConfig.definition.phone;
  }
  return false;
}
