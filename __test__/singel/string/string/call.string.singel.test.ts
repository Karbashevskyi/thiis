import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('string singel: call', () => {

    it.each(dataForGoodTesting)('is.string: Should true for $value', ({value}) => {
        expect(is.string.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.string: Should false for $value', ({value}) => {
        expect(is.string.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_string: Should false for $value', ({value}) => {
        expect(is.not_string.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_string: Should true for $value', ({value}) => {
        expect(is.not_string.call({}, value)).toBe(true);
    });

});
