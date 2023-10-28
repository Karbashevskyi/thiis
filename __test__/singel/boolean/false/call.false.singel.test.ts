import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('false singel: call', () => {

    it.each(dataForGoodTesting)('is.false: Should true for $value', ({value}) => {
        expect(is.false.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.false: Should false for $value', ({value}) => {
        expect(is.false.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_false: Should false for $value', ({value}) => {
        expect(is.not_false.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_false: Should true for $value', ({value}) => {
        expect(is.not_false.call({}, value)).toBe(true);
    });

});
