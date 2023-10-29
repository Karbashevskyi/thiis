import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('any_space singel: apply', () => {

    it.each(dataForGoodTesting)('is.any_space: Should true for $value', ({value}) => {
        expect(is.any_space.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.any_space: Should false for $value', ({value}) => {
        expect(is.any_space.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_any_space: Should false for $value', ({value}) => {
        expect(is.not_any_space.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_any_space: Should true for $value', ({value}) => {
        expect(is.not_any_space.apply({}, [value])).toBe(true);
    });

});
