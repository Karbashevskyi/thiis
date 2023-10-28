import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('odd singel', () => {


    it.each(dataForGoodTesting)('is.odd: Should true for $value', ({value}) => {
        expect(is.odd(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.odd: Should false for $value', ({value}) => {
        expect(is.odd(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_odd: Should false for $value', ({value}) => {
        expect(is.not_odd(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_odd: Should true for $value', ({value}) => {
        expect(is.not_odd(value)).toBe(true);
    });

});
