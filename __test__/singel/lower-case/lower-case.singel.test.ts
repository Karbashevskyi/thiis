import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('lowerCase singel', () => {

    it.each(dataForGoodTesting)('is.lowerCase: Should true for $value', ({value}) => {
        expect(is.lowerCase(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.lowerCase: Should false for $value', ({value}) => {
        expect(is.lowerCase(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.lowerCase: Should false for $value', ({value}) => {
        expect(is.not.lowerCase(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.lowerCase: Should true for $value', ({value}) => {
        expect(is.not.lowerCase(value)).toBe(true);
    });

});
