import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('null singel: apply', () => {

    it.each(dataForGoodTesting)('is.null: Should true for $value', ({value}) => {
        expect(is.null.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.null: Should false for $value', ({value}) => {
        expect(is.null.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_null: Should false for $value', ({value}) => {
        expect(is.not_null.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_null: Should true for $value', ({value}) => {
        expect(is.not_null.apply({}, [value])).toBe(true);
    });

});
