import { InstanceofMethod } from './methods/instanceof.method';
import { CommandType } from './types/commands.type';
import { predefinedMethods } from './methods';
import { isConfig } from './config';

function findInGlobalContext(command: string): undefined | CommandType {
  try {
    if (isConfig.useGlobalContext) {
      return globalThis?.[command] ?? self?.[command] ?? window?.[command] ?? global?.[command] ?? command;
    }
  } catch (e) {
    return undefined;
  }
  return undefined;
}

export function getMethod(commandName: string): CommandType {
  return predefinedMethods[commandName] ?? InstanceofMethod.bind({ classRef: findInGlobalContext(commandName) });
}
