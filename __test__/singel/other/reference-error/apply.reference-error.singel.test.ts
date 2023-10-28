import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('ReferenceError singel: apply', () => {

    it.each(dataForGoodTesting)('is.ReferenceError: Should true for $value', ({value}) => {
        expect(is.ReferenceError.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.ReferenceError: Should false for $value', ({value}) => {
        expect(is.ReferenceError.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_ReferenceError: Should false for $value', ({value}) => {
        expect(is.not_ReferenceError.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_ReferenceError: Should true for $value', ({value}) => {
        expect(is.not_ReferenceError.apply({}, [value])).toBe(true);
    });

});
