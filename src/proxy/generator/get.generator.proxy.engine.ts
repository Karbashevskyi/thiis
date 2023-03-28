import {proxyRecursive} from '../recursive';
import {SymbolMethod} from '../../methods/symbol.method';
import {isConfig} from '../../config';

type proxyGeneratorGetType = (target: object, name: string, receiver: unknown) => ReturnType<typeof proxyRecursive>;

export function proxyGeneratorGet(): proxyGeneratorGetType {
    return (target, name, receiver) => {
        if (SymbolMethod(name)) {
            return undefined as any;
        }
        if (['valueOf', 'toString'].includes(name)) {
            return isConfig.packageName[name].bind(isConfig.packageName);
        }
        return proxyRecursive(target, name, {
            commandList: [],
        });
    };
}
