import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('truthy singel', () => {


    it.each(dataForGoodTesting)('is.truthy: Should true for $value', ({value}) => {
        expect(is.truthy(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.truthy: Should false for $value', ({value}) => {
        expect(is.truthy(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_truthy: Should false for $value', ({value}) => {
        expect(is.not_truthy(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_truthy: Should true for $value', ({value}) => {
        expect(is.not_truthy(value)).toBe(true);
    });

});
