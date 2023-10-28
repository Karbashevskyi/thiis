import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('WeakMap singel', () => {

    it.each(dataForGoodTesting)('is.WeakMap: Should true for $value', ({value}) => {
        expect(is.WeakMap(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.WeakMap: Should false for $value', ({value}) => {
        expect(is.WeakMap(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_WeakMap: Should false for $value', ({value}) => {
        expect(is.not_WeakMap(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_WeakMap: Should true for $value', ({value}) => {
        expect(is.not_WeakMap(value)).toBe(true);
    });

});
