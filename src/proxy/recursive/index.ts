import {predefinedMethods} from '../../methods';
import {ParamsProxyEngineInterface} from '../../interfaces/engine/proxy/params.proxy.engine.interface';
import {CommandMixType} from '../../types/commands.type';
import {InstanceofMethod} from '../../methods/instanceof.method';
import {getDecide} from './apply.recursive.proxy.engine';

type proxyRecursiveGetType = (targetGet: any, nameGet: string) => ReturnType<typeof proxyRecursive>;

export function proxyRecursiveGet(params: ParamsProxyEngineInterface): proxyRecursiveGetType {
    return (targetGet, nameGet) => {
        return proxyRecursive(targetGet[nameGet], nameGet, params);
    };
}

/**
 *
 * @param target object for next proxy
 * @param name of current part of command is.object.not.empty() ['is', 'object', 'not', 'empty']
 * @param params ParamsProxyEngineInterface
 */
export function proxyRecursive(target: object | string, name: string, params: ParamsProxyEngineInterface): object {
    target = predefinedMethods[name] ?? name;
    params.commandList.push(target as CommandMixType);

    if (typeof target === 'string') {
        if (['not', 'or'].includes(target)) {
            target = predefinedMethods;
        } else {
            target = () => {
            };
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
