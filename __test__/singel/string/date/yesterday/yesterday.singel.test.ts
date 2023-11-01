import {is} from '../../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('yesterday singel', () => {

    it.each(dataForGoodTesting)('is.yesterday: Should true for $value', ({value}) => {
        expect(is.yesterday(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.yesterday: Should false for $value', ({value}) => {
        expect(is.yesterday(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_yesterday: Should false for $value', ({value}) => {
        expect(is.not_yesterday(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_yesterday: Should true for $value', ({value}) => {
        expect(is.not_yesterday(value)).toBe(true);
    });

});
