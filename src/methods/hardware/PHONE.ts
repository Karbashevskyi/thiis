import { isConfig } from '../../config';
import { NUMBER } from '../number/NUMBER';

export function PHONE(target: unknown = isConfig.state.screen.width): boolean {
  if (NUMBER(target)) {
    return target <= isConfig.definition.phone;
  }
  return false;
}
