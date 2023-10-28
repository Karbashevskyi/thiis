import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Infinity singel: call', () => {


    it.each(dataForGoodTesting)('is.infinity: Should true for $value', ({value}) => {
        expect(is.infinity.call([], value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.infinity: Should false for $value', ({value}) => {
        expect(is.infinity.call([], value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_infinity: Should false for $value', ({value}) => {
        expect(is.not_infinity.call([], value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_infinity: Should true for $value', ({value}) => {
        expect(is.not_infinity.call([], value)).toBe(true);
    });

});
