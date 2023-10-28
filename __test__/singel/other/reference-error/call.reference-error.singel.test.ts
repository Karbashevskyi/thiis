import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('ReferenceError singel: call', () => {

    it.each(dataForGoodTesting)('is.ReferenceError: Should true for $value', ({value}) => {
        expect(is.ReferenceError.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.ReferenceError: Should false for $value', ({value}) => {
        expect(is.ReferenceError.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_ReferenceError: Should false for $value', ({value}) => {
        expect(is.not_ReferenceError.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_ReferenceError: Should true for $value', ({value}) => {
        expect(is.not_ReferenceError.call({}, value)).toBe(true);
    });

});
