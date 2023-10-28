import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodCaseTesting, dataForGoodTesting} from './fixtures';


describe('Empty String singel: apply', () => {

    it.each(dataForGoodTesting)('is.string_empty: Should true for $value', ({value}) => {
        expect(is.string_empty.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.string_empty: Should false for $value', ({value}) => {
        expect(is.string_empty.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.string_not_empty: Should false for $value', ({value}) => {
        expect(is.string_not_empty.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.string_not_empty: Should false for $value', ({value}) => {
        expect(is.string_not_empty.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodCaseTesting)('is.string_not_empty: Should true for $value', ({value}) => {
        expect(is.string_not_empty.apply({}, [value])).toBe(true);
    });

});
