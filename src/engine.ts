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
        return command.apply(this, argumentList);
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

            if (!this.result) {

                return true;

            }

        } else {

            if (commandList[0] === 'or') {

                if (this.result) {

                    return true;

                }

            } else {

                if (!this.result) {

                    return false;

                }

            }

        }

    }

    return recursive.apply(this, [commandList.shift(), commandList, argumentList, index+1]);
}

export function getDecide(commandList: ParamsProxyEngineInterface['commandList'], argumentList: unknown[], context = {}): boolean {
    let lastCommandIndex = commandList.length - 1;
    if (lastCommandIndex) {
        let appliedContext: any = context;

        // const indexNot: number = commandList.indexOf('not');
        // const foundIndexNot: boolean = indexNot > -1;
        // let result: boolean;

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

        // for (let index = 0; index < commandList.length; index++) {
        //   if (indexNot === index) {
        //     continue;
        //   }
        //   /**
        //    * Examples:
        //    * 1. [v] is.object()
        //    * 2. [v] is.not.object()
        //    * 3. [v] is.object.empty()
        //    * 4. [v] is.object.or.string()
        //    * 5. [v] is.not.object.or.string()
        //    * 6. [v] is.object.not.empty.or.null({a: 1})
        //    * 7. [v] is.null.or.undefined.or.empty()
        //    * 8. [v] is.object.or.string.not.empty()
        //    */
        //   result = getResult(commandList[index], argumentList, appliedContext);
        //   if (commandList.length - 1 === index) {
        //     // Is last interaction
        //     // Negative cases for examples #1 and #2.
        //     // And
        //     // Success cases for examples: #1, #2, #3.
        //     return foundIndexNot && index > indexNot ? !result : result;
        //   } else {
        //     // Negative case for example #3.
        //     if (commandList[index + 1] === 'or') {
        //       // If we have "not" before "or" then we need to have only one negative result
        //       // If we don't have "not" before "or" then we need to have only one positive
        //       if (result) {
        //         if (foundIndexNot) {
        //           if (index > indexNot) {
        //             return false;
        //           } else {
        //             index = indexNot;
        //           }
        //         } else {
        //           return true;
        //         }
        //       } else {
        //         index = index + 1;
        //       }
        //     } else {
        //       if (result) {
        //         if (foundIndexNot) {
        //           // Example #6
        //           index = indexNot;
        //         }
        //       } else {
        //         return false;
        //       }
        //     }
        //   }
        // }
        // return true;
    }
    return getResult.apply(context, [commandList[lastCommandIndex], argumentList]);
}
