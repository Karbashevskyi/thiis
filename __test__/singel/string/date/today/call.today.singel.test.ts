import {is} from '../../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('today singel: call', () => {

    it.each(dataForGoodTesting)('is.today: Should true for $value', ({value}) => {
        expect(is.today.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.today: Should false for $value', ({value}) => {
        expect(is.today.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_today: Should false for $value', ({value}) => {
        expect(is.not_today.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_today: Should true for $value', ({value}) => {
        expect(is.not_today.call({}, value)).toBe(true);
    });

});
