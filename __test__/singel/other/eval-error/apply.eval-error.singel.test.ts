import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('EvalError singel: apply', () => {

    it.each(dataForGoodTesting)('is.EvalError: Should true for $value', ({value}) => {
        expect(is.EvalError.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.EvalError: Should false for $value', ({value}) => {
        expect(is.EvalError.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_EvalError: Should false for $value', ({value}) => {
        expect(is.not_EvalError.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_EvalError: Should true for $value', ({value}) => {
        expect(is.not_EvalError.apply({}, [value])).toBe(true);
    });

});
