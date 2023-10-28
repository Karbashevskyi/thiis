import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Empty Map singel: call', () => {

    it.each(dataForGoodTesting)('is.Map_empty: Should true for $value', ({value}) => {
        expect(is.Map_empty.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.Map_empty: Should false for $value', ({value}) => {
        expect(is.Map_empty.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.Map_not_empty: Should false for $value', ({value}) => {
        expect(is.Map_not_empty.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.Map_not_empty: Should false for $value', ({value}) => {
        expect(is.Map_not_empty.call({}, value)).toBe(true);
    });

});
