import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('even singel: apply', () => {

    it.each(dataForGoodTesting)('is.even: Should true for $value', ({value}) => {
        expect(is.even.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.even: Should false for $value', ({value}) => {
        expect(is.even.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_even: Should false for $value', ({value}) => {
        expect(is.not_even.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_even: Should true for $value', ({value}) => {
        expect(is.not_even.apply({}, [value])).toBe(true);
    });

});
