import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('upperCase singel: apply', () => {

    it.each(dataForGoodTesting)('is.upperCase: Should true for $value', ({value}) => {
        expect(is.upperCase.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.upperCase: Should false for $value', ({value}) => {
        expect(is.upperCase.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_upperCase: Should false for $value', ({value}) => {
        expect(is.not_upperCase.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_upperCase: Should true for $value', ({value}) => {
        expect(is.not_upperCase.apply({}, [value])).toBe(true);
    });

});
