import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Positive singel: apply', () => {

    it.each(dataForGoodTesting)('is.positive: Should true for $value', ({value}) => {
        expect(is.positive.apply([], [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.positive: Should false for $value', ({value}) => {
        expect(is.positive.apply([], [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_positive: Should false for $value', ({value}) => {
        expect(is.not_positive.apply([], [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_positive: Should true for $value', ({value}) => {
        expect(is.not_positive.apply([], [value])).toBe(true);
    });

});
