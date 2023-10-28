import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('even singel', () => {


    it.each(dataForGoodTesting)('is.even: Should true for $value', ({value}) => {
        expect(is.even(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.even: Should false for $value', ({value}) => {
        expect(is.even(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_even: Should false for $value', ({value}) => {
        expect(is.not_even(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_even: Should true for $value', ({value}) => {
        expect(is.not_even(value)).toBe(true);
    });

});
