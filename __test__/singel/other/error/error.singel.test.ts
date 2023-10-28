import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Error singel', () => {


    it.each(dataForGoodTesting)('is.Error: Should true for $value', ({value}) => {
        expect(is.Error(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.Error: Should false for $value', ({value}) => {
        expect(is.Error(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_Error: Should false for $value', ({value}) => {
        expect(is.not_Error(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_Error: Should true for $value', ({value}) => {
        expect(is.not_Error(value)).toBe(true);
    });

});
