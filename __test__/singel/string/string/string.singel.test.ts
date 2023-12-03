import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('string singel', () => {

    it.each(dataForGoodTesting)('is.string: Should true for $value', ({value}) => {
        expect(is.string(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.string: Should false for $value', ({value}) => {
        expect(is.string(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_string: Should false for $value', ({value}) => {
        expect(is.not_string(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_string: Should true for $value', ({value}) => {
        expect(is.not_string(value)).toBe(true);
    });

});
