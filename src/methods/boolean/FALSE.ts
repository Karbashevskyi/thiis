import {is} from '../../index';

export function FALSE(target: unknown): target is false {
  return target === false;
}

FALSE.allowed = [];
FALSE.originalName = 'false';
