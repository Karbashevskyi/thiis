import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('falsy singel: apply', () => {

    it.each(dataForGoodTesting)('is.falsy: Should true for $value', ({value}) => {
        expect(is.falsy.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.falsy: Should false for $value', ({value}) => {
        expect(is.falsy.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_falsy: Should false for $value', ({value}) => {
        expect(is.not_falsy.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_falsy: Should true for $value', ({value}) => {
        expect(is.not_falsy.apply({}, [value])).toBe(true);
    });

});
