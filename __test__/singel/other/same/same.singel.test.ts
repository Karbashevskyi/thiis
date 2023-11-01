import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Object singel', () => {

    it.each(dataForGoodTesting)('is.same: Should true for $first === $second', ({first, second}) => {
        expect(is.same(first, second)).toBe(true);
    });

    it.each(dataForBadTesting)('is.same: Should false for $first === $second', ({first, second}) => {
        expect(is.same(first, second)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_same: Should false for $first === $second', ({first, second}) => {
        expect(is.not_same(first, second)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_same: Should true for $first === $second', ({first, second}) => {
        expect(is.not_same(first, second)).toBe(true);
    });

});
