import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('numeric singel: call', () => {


    it.each(dataForGoodTesting)('is.numeric: Should true for $value', ({value}) => {
        expect(is.numeric.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.numeric: Should false for $value', ({value}) => {
        expect(is.numeric.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_numeric: Should false for $value', ({value}) => {
        expect(is.not_numeric.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_numeric: Should true for $value', ({value}) => {
        expect(is.not_numeric.call({}, value)).toBe(true);
    });

});
