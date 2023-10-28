import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('EvalError singel: call', () => {


    it.each(dataForGoodTesting)('is.EvalError: Should true for $value', ({value}) => {
        expect(is.EvalError.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.EvalError: Should false for $value', ({value}) => {
        expect(is.EvalError.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_EvalError: Should false for $value', ({value}) => {
        expect(is.not_EvalError.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_EvalError: Should true for $value', ({value}) => {
        expect(is.not_EvalError.call({}, value)).toBe(true);
    });

});
