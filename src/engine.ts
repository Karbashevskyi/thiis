import {ParamsProxyEngineInterface} from './interfaces/engine/proxy/params.proxy.engine.interface';
import {InstanceofMethod} from './methods/instanceof.method';
import {CommandMixType, CommandType} from './types/commands.type';
import {predefinedMethods} from './methods';
import {isConfig} from './config';

const APPLY_COMMAND = 'apply';
const CALL_COMMAND = 'call';
const BIND_COMMAND = 'bind';

function findInGlobalContext(command: string): string | CommandType {
    try {
        if (isConfig.useGlobalContext) {
            return globalThis?.[command] ?? self?.[command] ?? window?.[command] ?? global?.[command] ?? command;
        }
    } catch (e) {
        return command;
    }
    return command;
}

function tryTodoWithTheCommand(commandName: string = '', argumentList: unknown[] = []): boolean {
    if (!commandName.length || !argumentList.length) {
        return false;
    }
    const pieces: string[] = commandName.split('_');
    if (pieces.length > 1) {
        const command: CommandType | undefined = predefinedMethods[pieces.shift() as string];
        if (command) {
            return command.apply(this, [argumentList[0], ...pieces]);
        }
    }
    return false;
}

function getResult(command: CommandType | string, argumentList: unknown[]): boolean {
    if (typeof command === 'string') {
        command = findInGlobalContext(command);
        if (typeof command === 'string') {
            return tryTodoWithTheCommand.apply(this, [command, argumentList]);
        }
    } else {
        const result: any = command.apply(this, argumentList);
        if (typeof result === 'boolean') {
            return result;
        } else {
            command = result.classRef; // Need for custom model validation case: is.Person()
        }
    }
    return InstanceofMethod.apply(this, [argumentList[0], command as unknown as any]);
}

function recursive(command: CommandMixType | undefined, commandList: CommandMixType[], argumentList: unknown[], index: number = 0) {

    if (!index) {

        this.indexOfNot = command === 'not' ? 0 : commandList.indexOf('not');

    }

    if (!['not', 'or'].includes(command as string)) {

        if (!this.isUnderNot && this.indexOfNot >= 0) {

            this.isUnderNot = index > this.indexOfNot;

        }

        this.result = getResult.apply(this, [command as CommandType | string, argumentList]);

        if (this.isUnderNot) {

            if (commandList.length) {

                if (this.result) {

                    return false;

                }

            } else {

                return !this.result;

            }

        } else {

            if (commandList[0] === 'or') {

                if (this.result) {

                    return true;

                }

            } else {

                if (commandList.length) {

                    if (!this.result) {

                        return false;

                    }

                } else  {

                    return this.result;

                }

            }

        }

    }

    return recursive.apply(this, [commandList.shift(), commandList, argumentList, index+1]);
}

export function getDecide(commandList: ParamsProxyEngineInterface['commandList'], argumentList: unknown[], context = {}): boolean {
    let lastCommandIndex = commandList.length - 1;
    let appliedContext: any = context;
    if (lastCommandIndex) {

        switch (commandList[lastCommandIndex]) {
            case APPLY_COMMAND:
                commandList.pop();
                appliedContext = argumentList[0];
                argumentList = argumentList[1] as unknown[];
                break;
            case CALL_COMMAND:
                commandList.pop();
                appliedContext = argumentList.shift();
                break;
            case BIND_COMMAND:
                // TODO in this way need return Function with given context
                throw new SyntaxError(
                    `Please do not use '${BIND_COMMAND}' with the package, we will try to fix this in the future. If you know how to fix this, please create an 'issue'`,
                );
        }

        lastCommandIndex = commandList.length - 1;

        if (lastCommandIndex) {
            return recursive.apply(appliedContext, [commandList.shift(), commandList, argumentList]);
        }

    }
    return getResult.apply(appliedContext, [commandList[lastCommandIndex], argumentList]);
}
