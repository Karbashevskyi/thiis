import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('TypeError singel', () => {


    it.each(dataForGoodTesting)('is.TypeError: Should true for $value', ({value}) => {
        expect(is.TypeError(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.TypeError: Should false for $value', ({value}) => {
        expect(is.TypeError(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_TypeError: Should false for $value', ({value}) => {
        expect(is.not_TypeError(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_TypeError: Should true for $value', ({value}) => {
        expect(is.not_TypeError(value)).toBe(true);
    });

});
