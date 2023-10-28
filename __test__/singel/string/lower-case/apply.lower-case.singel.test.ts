import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('lowerCase singel: apply', () => {

    it.each(dataForGoodTesting)('is.lowerCase: Should true for $value', ({value}) => {
        expect(is.lowerCase.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.lowerCase: Should false for $value', ({value}) => {
        expect(is.lowerCase.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_lowerCase: Should false for $value', ({value}) => {
        expect(is.not_lowerCase.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_lowerCase: Should true for $value', ({value}) => {
        expect(is.not_lowerCase.apply({}, [value])).toBe(true);
    });

});
