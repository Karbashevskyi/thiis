import { isConfig } from '../../config';
import { OBJECT } from '../OBJECT';
import { EMPTY } from '../EMPTY';

export function BROWSER(target: unknown = isConfig.state.navigator): boolean {
  return OBJECT(target) && !EMPTY(target);
}
