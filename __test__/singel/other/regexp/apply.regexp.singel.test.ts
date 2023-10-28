import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('RegExp singel: apply', () => {

    it.each(dataForGoodTesting)('is.RegExp: Should true for $value', ({value}) => {
        expect(is.RegExp.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.RegExp: Should false for $value', ({value}) => {
        expect(is.RegExp.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_RegExp: Should false for $value', ({value}) => {
        expect(is.not_RegExp.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_RegExp: Should true for $value', ({value}) => {
        expect(is.not_RegExp.apply({}, [value])).toBe(true);
    });

});
