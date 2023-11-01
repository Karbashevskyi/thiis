import {is} from '../../../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('isoPast singel: call', () => {

    it.each(dataForGoodTesting)('is.isoPast: Should true for $value', ({value}) => {
        expect(is.isoPast.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.isoPast: Should false for $value', ({value}) => {
        expect(is.isoPast.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_isoPast: Should false for $value', ({value}) => {
        expect(is.not_isoPast.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_isoPast: Should true for $value', ({value}) => {
        expect(is.not_isoPast.call({}, value)).toBe(true);
    });

});
