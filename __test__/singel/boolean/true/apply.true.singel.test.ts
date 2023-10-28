import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('true singel: apply', () => {


    it.each(dataForGoodTesting)('is.true: Should true for $value', ({value}) => {
        expect(is.true.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.true: Should false for $value', ({value}) => {
        expect(is.true.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_true: Should false for $value', ({value}) => {
        expect(is.not_true.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_true: Should true for $value', ({value}) => {
        expect(is.not_true.apply({}, [value])).toBe(true);
    });

});
