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

export function getMethod(commandName: string, context: { any?: boolean } = {}): CommandType {
  return (
    predefinedMethods[commandName]?.bind?.(context) ??
    InstanceofMethod.bind({ classRef: findInGlobalContext(commandName) })
  );
}

export function proxyGet(target: typeof predefinedMethods, name: string, receiver) {
  if (name in target) {
    return target[name];
  }

  if (name[0] === 'l' && name[1] === 'e' && name[2] === 'n') {
    // first 3 letters is "len"
    return (targetValue: string) => {
      // TODO push to predefinedMethods
      return target.len(targetValue, name.split('_').slice(1));
    };
  }

  let [commandNamesStr, commandNamesUnderNot] = name.split('_not_');
  if (name[0] === 'n' && name[1] === 'o' && name[2] === 't') {
    // first 3 letters is "not"
    // reverse commandNamesStr and commandNamesUnderNot
    [commandNamesUnderNot, commandNamesStr] = [commandNamesStr, commandNamesUnderNot];
  }

  const listOfCommands = () => {
    const commandByLogic: {
      every: CommandType[];
      some: CommandType[];
      everyBad: CommandType[];
      underOr: boolean;
      context: {
        any?: boolean;
      };
      convertToMethod: (methodName: string) => CommandType;
      filterMethods: (methods: string) => boolean;
    } = {
      every: [],
      some: [],
      everyBad: [],
      underOr: false,
      context: {},
      convertToMethod: (methodName) => getMethod(methodName, commandByLogic.context),
      filterMethods: (method) => {
        if (method === 'or') {
          commandByLogic.underOr = true;
          return false;
        }
        if (method === 'any') {
          commandByLogic.context.any = true;
          return false;
        }
        return true;
      },
    };

    if (commandNamesStr) {
      const commandNames = commandNamesStr.split('_').filter(commandByLogic.filterMethods);

      if (commandByLogic.underOr) {
        commandByLogic.some = commandNames.map(commandByLogic.convertToMethod);
      } else {
        commandByLogic.every = commandNames.map(commandByLogic.convertToMethod);
      }
    }

    if (commandNamesUnderNot) {
      const methodsUnderNot = commandNamesUnderNot.split('_').filter(commandByLogic.filterMethods);
      commandByLogic.everyBad = methodsUnderNot.map(commandByLogic.convertToMethod);
    }

    return (...args: any[]) => {
      let result = false;
      if (commandByLogic.every.length) {
        result = commandByLogic.every.every((command) => command(...args));
        if (!result) {
          return false;
        }
      }
      if (commandByLogic.some.length) {
        result = commandByLogic.some.some((command) => command(...args));
        if (!result) {
          return false;
        }
      }
      if (commandByLogic.everyBad.length) {
        result = commandByLogic.everyBad.every((command) => !command(...args));
      }
      return result;
    };
  };

  target[name] = listOfCommands();

  return target[name];
}
