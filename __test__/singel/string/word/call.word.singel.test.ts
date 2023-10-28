import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('word singel: call', () => {


    it.each(dataForGoodTesting)('is.word: Should true for $value', ({value}) => {
        expect(is.word.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.word: Should false for $value', ({value}) => {
        expect(is.word.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_word: Should false for $value', ({value}) => {
        expect(is.not_word.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_word: Should true for $value', ({value}) => {
        expect(is.not_word.call({}, value)).toBe(true);
    });

});
