import {is} from '../../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('today singel', () => {

    it.each(dataForGoodTesting)('is.today: Should true for $value', ({value}) => {
        expect(is.today(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.today: Should false for $value', ({value}) => {
        expect(is.today(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_today: Should false for $value', ({value}) => {
        expect(is.not_today(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_today: Should true for $value', ({value}) => {
        expect(is.not_today(value)).toBe(true);
    });

});
