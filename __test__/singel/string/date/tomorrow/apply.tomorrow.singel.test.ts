import {is} from '../../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('tomorrow singel: apply', () => {

    it.each(dataForGoodTesting)('is.tomorrow: Should true for $value', ({value}) => {
        expect(is.tomorrow.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.tomorrow: Should false for $value', ({value}) => {
        expect(is.tomorrow.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_tomorrow: Should false for $value', ({value}) => {
        expect(is.not_tomorrow.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_tomorrow: Should true for $value', ({value}) => {
        expect(is.not_tomorrow.apply({}, [value])).toBe(true);
    });

});
