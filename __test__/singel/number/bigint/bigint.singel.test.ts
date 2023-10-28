import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('bigInt singel', () => {


    it.each(dataForGoodTesting)('is.bigInt: Should true for $value', ({value}) => {
        expect(is.bigInt(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.bigInt: Should false for $value', ({value}) => {
        expect(is.bigInt(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_bigInt: Should false for $value', ({value}) => {
        expect(is.not_bigInt(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_bigInt: Should true for $value', ({value}) => {
        expect(is.not_bigInt(value)).toBe(true);
    });

});
