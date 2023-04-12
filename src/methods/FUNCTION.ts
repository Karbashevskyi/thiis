import {ASYNC_FUNCTION} from './ASYNC_FUNCTION';
import {GENERATOR_FUNCTION} from './GENERATOR_FUNCTION';

export function FUNCTION<T extends typeof Function>(target: unknown): target is T {
    try {
        return (
            Object.prototype.toString.call(target) === '[object Function]' || ASYNC_FUNCTION(target) || GENERATOR_FUNCTION(target)
        );
    } catch (e) {
        if (e instanceof TypeError) {
            if (e.message === 'Cannot create proxy with a non-object as target or handler') {
                return true;
            }
        }
        return false;
    }
}
