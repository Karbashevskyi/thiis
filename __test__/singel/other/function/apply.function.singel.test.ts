import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('function singel: apply', () => {

    it.each(dataForGoodTesting)('is.function: Should true for $value', ({value}) => {
        expect(is.function.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.function: Should false for $value', ({value}) => {
        expect(is.function.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_function: Should false for $value', ({value}) => {
        expect(is.not_function.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_function: Should true for $value', ({value}) => {
        expect(is.not_function.apply({}, [value])).toBe(true);
    });

});
