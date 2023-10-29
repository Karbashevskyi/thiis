import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('space singel', () => {

    it.each(dataForGoodTesting)('is.space: Should true for $value', ({value}) => {
        expect(is.space(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.space: Should false for $value', ({value}) => {
        expect(is.space(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_space: Should false for $value', ({value}) => {
        expect(is.not_space(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_space: Should true for $value', ({value}) => {
        expect(is.not_space(value)).toBe(true);
    });

});
