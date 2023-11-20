import { isConfig } from '../../config';
import { ObjectMethod } from '../object.method';
import { EmptyMethod } from '../empty.method';

export function BrowserMethod(target: unknown = isConfig.state.navigator): boolean {
  if (this.BrowserMethod) {
    return true;
  }
  return (this.BrowserMethod = ObjectMethod.call(this, target) && !EmptyMethod.call(this, target));
}
