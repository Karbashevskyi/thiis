import { registerInIsDecorator } from './decorators/register-in-is.decorator';
import { AllMethodsInterface, predefinedMethods } from './methods';
import { isConfig } from './config';
import { getMethod } from './engine';
import { CommandType } from './types/commands.type';

export const RegisterInIs = registerInIsDecorator;
export const IsConfig = isConfig;

/**
 * @description 'is' is a proxy object that allows you to call methods from you global context
 * and from the context of the 'is' object. We apologize that there is no prepared full list of all available options
 * from the interface level, there was an attempt to add, but IDEA simply cannot stand the number of combinations
 * and does not display anything at all, so at least you can read this information.
 * We recommend visiting the documentation site, you will find the link in the readme file of the package.
 * @example
 * is.string('hello world'); // true
 * is.string_not_empty('hello world'); // true
 * is.string_not_empty(''); // false
 * is.HTMLDivElement(document.createElement('div')); // true
 * is.HTMLDivElement({}); // false
 * is.object({}); // true
 * is.object_not_empty({}); // true
 * is.len_gte_5('hello world'); // true; number 5 you can change
 * is.len_gt_3_lt_10('hello world'); // true; numbers 3 and 10 you can change
 */
export const is: AllMethodsInterface = new Proxy<any>(predefinedMethods, {
  get: (target, name: string, receiver) => {
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
      } = {
        every: [],
        some: [],
        everyBad: [],
      };

      if (commandNamesStr) {
        const commandNames = commandNamesStr.split('_');

        if (commandNames.includes('or')) {
          const methodsOr = commandNames.filter((methodOr) => methodOr !== 'or');
          commandByLogic.some = methodsOr.map((methodName) => getMethod(methodName));
        } else {
          commandByLogic.every = commandNames.map((methodName) => getMethod(methodName));
        }
      }

      if (commandNamesUnderNot) {
        const methodsUnderNot = commandNamesUnderNot.split('_').filter((methodUnderNot) => methodUnderNot !== 'or');
        commandByLogic.everyBad = methodsUnderNot.map((methodName) => getMethod(methodName));
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
  },
});
