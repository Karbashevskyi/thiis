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

function getResult(commandName: string, argumentList: unknown[]): boolean {
  let command: CommandType | undefined = predefinedMethods[commandName];
  if (command) {
    const result: any = command(...argumentList);
    if (typeof result === 'boolean') {
      return result;
    } else {
      command = result.classRef;
    }
  } else {
    command = findInGlobalContext(commandName);
  }
  return InstanceofMethod.apply({}, [argumentList[0], command as unknown as any]);
}

export function getDecide(commands: string[], argumentList: unknown[]): boolean {
  const indexNot: number = commands.indexOf('not');
  const foundIndexNot: boolean = indexNot > -1;
  let result: boolean;

  for (let index = 0; index < commands.length; index++) {
    if (indexNot === index) {
      continue;
    }
    /**
     * Examples:
     * 1. [v] is.object()
     * 2. [v] is.not.object()
     * 3. [v] is.object.empty()
     * 4. [v] is.object.or.string()
     * 5. [v] is.not.object.or.string()
     * 6. [v] is.object.not.empty.or.null({a: 1})
     * 7. [v] is.null.or.undefined.or.empty()
     * 8. [v] is.object.or.string.not.empty()
     */
    result = getResult(commands[index], argumentList);
    if (commands.length - 1 === index) {
      // Is last interaction
      // Negative cases for examples #1 and #2.
      // And
      // Success cases for examples: #1, #2, #3.
      return foundIndexNot && index > indexNot ? !result : result;
    } else {
      // Negative case for example #3.
      if (commands[index + 1] === 'or') {
        // If we have "not" before "or" then we need to have only one negative result
        // If we don't have "not" before "or" then we need to have only one positive
        if (result) {
          if (foundIndexNot) {
            if (index > indexNot) {
              return false;
            } else {
              index = indexNot;
            }
          } else {
            return true;
          }
        } else {
          index = index + 1;
        }
      } else {
        if (result) {
          if (foundIndexNot) {
            // Example #6
            index = indexNot;
          }
        } else {
          return false;
        }
      }
    }
  }
  return true;
}
