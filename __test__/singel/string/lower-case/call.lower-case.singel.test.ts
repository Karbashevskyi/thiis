import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('lowerCase singel: call', () => {

    it.each(dataForGoodTesting)('is.lowerCase: Should true for $value', ({value}) => {
        expect(is.lowerCase.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.lowerCase: Should false for $value', ({value}) => {
        expect(is.lowerCase.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.lowerCase: Should false for $value', ({value}) => {
        expect(is.not.lowerCase.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.lowerCase: Should true for $value', ({value}) => {
        expect(is.not.lowerCase.call({}, value)).toBe(true);
    });

});
