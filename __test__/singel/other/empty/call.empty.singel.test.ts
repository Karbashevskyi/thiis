import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('empty singel: call', () => {

    it.each(dataForGoodTesting)('is.empty: Should true for $value', ({value}) => {
        expect(is.empty.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.empty: Should false for $value', ({value}) => {
        expect(is.empty.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_empty: Should false for $value', ({value}) => {
        expect(is.not_empty.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_empty: Should true for $value', ({value}) => {
        expect(is.not_empty.call({}, value)).toBe(true);
    });

});
