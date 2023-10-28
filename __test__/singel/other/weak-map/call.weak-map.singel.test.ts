import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('WeakMap singel: call', () => {


    it.each(dataForGoodTesting)('is.WeakMap: Should true for $value', ({value}) => {
        expect(is.WeakMap.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.WeakMap: Should false for $value', ({value}) => {
        expect(is.WeakMap.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_WeakMap: Should false for $value', ({value}) => {
        expect(is.not_WeakMap.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_WeakMap: Should true for $value', ({value}) => {
        expect(is.not_WeakMap.call({}, value)).toBe(true);
    });

});
