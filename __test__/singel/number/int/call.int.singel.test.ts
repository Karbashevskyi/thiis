import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('int singel: call', () => {


    it.each(dataForGoodTesting)('is.int: Should true for $value', ({value}) => {
        expect(is.int.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.int: Should false for $value', ({value}) => {
        expect(is.int.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_int: Should false for $value', ({value}) => {
        expect(is.not_int.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_int: Should true for $value', ({value}) => {
        expect(is.not_int.call({}, value)).toBe(true);
    });

});
