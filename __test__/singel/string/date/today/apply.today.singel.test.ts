import {is} from '../../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('today singel: apply', () => {

    it.each(dataForGoodTesting)('is.today: Should true for $value', ({value}) => {
        expect(is.today.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.today: Should false for $value', ({value}) => {
        expect(is.today.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_today: Should false for $value', ({value}) => {
        expect(is.not_today.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_today: Should true for $value', ({value}) => {
        expect(is.not_today.apply({}, [value])).toBe(true);
    });

});
