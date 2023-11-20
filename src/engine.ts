import { InstanceofMethod } from './methods/instanceof.method';
import { CommandType } from './types/commands.type';
import { predefinedMethods } from './methods';
import { isConfig } from './config';

/**
 * The findInGlobalContext function takes a command as a parameter and checks if the global context should be used
 * (as specified by isConfig.useGlobalContext).
 * If so, it attempts to find the command in the global context and returns it.
 * If the command is not found or the global context should not be used,
 * it returns a function that simply returns false.
 * @param command - The command to find.
 * @returns - The found command or a function that returns false.
 */
function findInGlobalContext(command: string): CommandType {
  if (isConfig.useGlobalContext) {
    return (
      isConfig.globalContext[command] ||
      (() => {
        return false;
      })
    );
  }
  return () => {
    return false;
  };
}

/**
 * The getMethod function is used to retrieve a method based on a given command name.
 * It first checks if the command name exists in the predefined methods.
 * If it does, it returns the corresponding method.
 * If it doesn't, it binds an instance of InstanceofMethod to the command found in the global context
 * (or a function that returns false if the command is not found) and returns this.
 * @param commandName - The name of the command.
 * @returns - The found method or an instance of the method.
 */
export function getMethod(commandName: string): CommandType {
  return (
    predefinedMethods[commandName] ||
    function (...args: unknown[]) {
      // @ts-ignore
      return InstanceofMethod.call(this, args[0], findInGlobalContext(commandName));
    }
  );
}

/**
 * The proxyGet function is used to get a property from a target object.
 * If the property does not exist, it calls the notFoundMethodCase function.
 * @param target - The target object.
 * @param name - The name of the property.
 * @returns - The property of the target object or the result of the notFoundMethodCase function.
 */
export function proxyGet(target: typeof predefinedMethods, name: string): CallableFunction {
  return target[name]
    ? target[name].thiisExternal
      ? target[name]
      : target[name].bind({})
    : notFoundMethodCase(target, name);
}

/**
 * The notFoundMethodCase function is a bit more complex.
 * It handles the case when a method is not found.
 * It checks if the name starts with 'len', and if so,
 * it returns a function that calls the len method on the target with certain parameters.
 * If the name does not start with 'len', it splits the name into parts and
 * processes them differently based on whether they are before or after the 'not' part.
 * It then returns a function that checks if all the 'every' commands and
 * at least one of the 'some' commands return true, and none of the 'everyBad' commands return true.
 * @param target - The target object.
 * @param name - The name of the property.
 * @returns - A function that handles the case when a method is not found.
 */
function notFoundMethodCase(target: typeof predefinedMethods, name: string) {
  if (name[0] === 'l' && name[1] === 'e' && name[2] === 'n') {
    // first 3 letters is "len"
    return (targetValue: string) => {
      // TODO push to predefinedMethods
      return target.len.call({}, targetValue, name.split('_').slice(1));
    };
  }

  const methodsName = name.split('_');
  const indexOfNot = methodsName.indexOf('not');
  const [commandNamesStr, commandNamesUnderNot] =
    indexOfNot > -1 ? [methodsName.slice(0, indexOfNot), methodsName.slice(indexOfNot)] : [methodsName, []];

  const commandByLogic: {
    every: CommandType[];
    some: CommandType[];
    everyBad: CommandType[];
    underOr: boolean;
  } = {
    every: [],
    some: [],
    everyBad: [],
    underOr: false,
  };

  if (commandNamesStr) {
    commandNamesStr.forEach((commandName, index, array) => {
      if (array[index + 1] === 'or') {
        commandByLogic.underOr = true;
      }
      if (commandName !== 'or') {
        if (commandByLogic.underOr) {
          commandByLogic.some.push(getMethod(commandName));
        } else {
          commandByLogic.every.push(getMethod(commandName));
        }
      }
    });

    if (commandNamesUnderNot) {
      const methodsUnderNot = commandNamesUnderNot.filter((method) => method !== 'not' && method !== 'or');
      commandByLogic.everyBad = methodsUnderNot.map(getMethod);
    }

    return (target[name] = (...args: unknown[]) => {
      const context: { [key: string]: boolean } = {};
      if (commandByLogic.every.length) {
        if (!commandByLogic.every.every((command) => command.apply(context, args))) {
          return false;
        }
      }
      if (commandByLogic.some.length) {
        if (!commandByLogic.some.some((command) => command.apply(context, args))) {
          return false;
        }
      }
      // Empty array return false
      return !commandByLogic.everyBad.some((command) => command.apply(context, args));
    });
  }

  // Case: is.not_[comment]

  const methodsUnderNot = commandNamesUnderNot.filter((method) => method !== 'not' && method !== 'or');
  commandByLogic.everyBad = methodsUnderNot.map(getMethod);

  return (target[name] = (...args: unknown[]) => {
    const context: { [key: string]: boolean } = {};
    return !commandByLogic.everyBad.some((command) => command.apply(context, args));
  });
}
