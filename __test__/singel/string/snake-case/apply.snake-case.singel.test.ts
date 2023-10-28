import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('snakeCase singel: apply', () => {

    it.each(dataForGoodTesting)('is.snakeCase: Should true for $value', ({value}) => {
        expect(is.snakeCase.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.snakeCase: Should false for $value', ({value}) => {
        expect(is.snakeCase.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_snakeCase: Should false for $value', ({value}) => {
        expect(is.not_snakeCase.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_snakeCase: Should true for $value', ({value}) => {
        expect(is.not_snakeCase.apply({}, [value])).toBe(true);
    });

});
