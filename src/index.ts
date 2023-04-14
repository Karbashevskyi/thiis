import { registerInIsDecorator } from './decorators/register-in-is.decorator';
import {AllMethodsInterface, predefinedMethods} from './methods';
import { isConfig } from './config';
import {SymbolMethod} from './methods/symbol.method';
import {ParamsProxyEngineInterface} from './interfaces/engine/proxy/params.proxy.engine.interface';
import {CommandMixType} from './types/commands.type';
import {getDecide} from './engine';
import {InstanceofMethod} from './methods/instanceof.method';

export const RegisterInIs = registerInIsDecorator;
export const IsConfig = isConfig;

function proxyRecursiveGet(params: ParamsProxyEngineInterface) {
  return (targetGet, nameGet) => {
    return proxyRecursive(targetGet[nameGet], nameGet, params);
  };
}

export const is: AllMethodsInterface = new Proxy<any>(predefinedMethods, {
  get: (target, name, receiver) => {
    if (SymbolMethod(name)) {
      return undefined as any;
    }
    if (['valueOf', 'toString'].includes(name)) {
      return isConfig.packageName[name].bind(isConfig.packageName);
    }

    return proxyRecursive(target, name, {
      commandList: [],
    });
  },
});


function proxyRecursive(target: object | string, name: string, params: ParamsProxyEngineInterface): object {
  target = predefinedMethods[name] ?? name;
  params.commandList.push(target as CommandMixType);

  if (typeof target === 'string') {
    if (['not', 'or'].includes(target)) {
      target = predefinedMethods;
    } else {
      target = () => {};
    }
  }

  return new Proxy(target, {
    get: proxyRecursiveGet(params),
    apply: (notUsedTargetApply: any, thisArg: unknown, argumentList: unknown[] | unknown[][]): boolean => {
      try {
        return getDecide(params.commandList, argumentList);
      } catch (e) {
        if (InstanceofMethod(e, SyntaxError)) {
          throw e;
        }
        return false;
      }
    },
  });
}
