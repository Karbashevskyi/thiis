import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('SyntaxError singel: call', () => {


    it.each(dataForGoodTesting)('is.SyntaxError: Should true for $value', ({value}) => {
        expect(is.SyntaxError.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.SyntaxError: Should false for $value', ({value}) => {
        expect(is.SyntaxError.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_SyntaxError: Should false for $value', ({value}) => {
        expect(is.not_SyntaxError.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_SyntaxError: Should true for $value', ({value}) => {
        expect(is.not_SyntaxError.call({}, value)).toBe(true);
    });

});
