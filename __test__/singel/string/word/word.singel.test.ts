import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('word singel', () => {


    it.each(dataForGoodTesting)('is.word: Should true for $value', ({value}) => {
        expect(is.word(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.word: Should false for $value', ({value}) => {
        expect(is.word(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_word: Should false for $value', ({value}) => {
        expect(is.not_word(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_word: Should true for $value', ({value}) => {
        expect(is.not_word(value)).toBe(true);
    });

});
