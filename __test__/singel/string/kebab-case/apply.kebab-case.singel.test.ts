import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('kebabCase singel: apply', () => {

    it.each(dataForGoodTesting)('is.kebabCase: Should true for $value', ({value}) => {
        expect(is.kebabCase.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.kebabCase: Should false for $value', ({value}) => {
        expect(is.kebabCase.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_kebabCase: Should false for $value', ({value}) => {
        expect(is.not_kebabCase.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_kebabCase: Should true for $value', ({value}) => {
        expect(is.not_kebabCase.apply({}, [value])).toBe(true);
    });

});
