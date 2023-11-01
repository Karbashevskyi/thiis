import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('Object singel: apply', () => {

    it.each(dataForGoodTesting)('is.same: Should true for $first === $second', ({first, second}) => {
        expect(is.same.apply({}, [first, second] as any)).toBe(true);
    });

    it.each(dataForBadTesting)('is.same: Should false for $first === $second', ({first, second}) => {
        expect(is.same.apply({}, [first, second] as any)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_same: Should false for $first === $second', ({first, second}) => {
        expect(is.not_same.apply({}, [first, second] as any)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_same: Should true for $first === $second', ({first, second}) => {
        expect(is.not_same.apply({}, [first, second] as any)).toBe(true);
    });

});
