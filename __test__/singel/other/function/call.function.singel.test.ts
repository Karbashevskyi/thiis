import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('function singel: call', () => {


    it.each(dataForGoodTesting)('is.function: Should true for $value', ({value}) => {
        expect(is.function.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.function: Should false for $value', ({value}) => {
        expect(is.function.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_function: Should false for $value', ({value}) => {
        expect(is.not_function.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_function: Should true for $value', ({value}) => {
        expect(is.not_function.call({}, value)).toBe(true);
    });

});
