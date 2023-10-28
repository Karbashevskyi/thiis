import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Empty Map singel: apply', () => {

    it.each(dataForGoodTesting)('is.Map_empty: Should true for $value', ({value}) => {
        expect(is.Map_empty.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.Map_empty: Should false for $value', ({value}) => {
        expect(is.Map_empty.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.Map_not_empty: Should false for $value', ({value}) => {
        expect(is.Map_not_empty.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.Map_not_empty: Should false for $value', ({value}) => {
        expect(is.Map_not_empty.apply({}, [value])).toBe(true);
    });

});
