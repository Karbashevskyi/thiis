import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('TypeError singel: apply', () => {

    it.each(dataForGoodTesting)('is.TypeError: Should true for $value', ({value}) => {
        expect(is.TypeError.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.TypeError: Should false for $value', ({value}) => {
        expect(is.TypeError.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_TypeError: Should false for $value', ({value}) => {
        expect(is.not_TypeError.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_TypeError: Should true for $value', ({value}) => {
        expect(is.not_TypeError.apply({}, [value])).toBe(true);
    });

});
