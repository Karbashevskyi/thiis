import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('char singel: call', () => {

    it.each(dataForGoodTesting)('is.char: Should true for $value', ({value}) => {
        expect(is.char.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.char: Should false for $value', ({value}) => {
        expect(is.char.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_char: Should false for $value', ({value}) => {
        expect(is.not_char.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_char: Should true for $value', ({value}) => {
        expect(is.not_char.call({}, value)).toBe(true);
    });

});
