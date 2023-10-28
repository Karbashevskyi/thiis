import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('RegExp singel: call', () => {


    it.each(dataForGoodTesting)('is.RegExp: Should true for $value', ({value}) => {
        expect(is.RegExp.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.RegExp: Should false for $value', ({value}) => {
        expect(is.RegExp.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_RegExp: Should false for $value', ({value}) => {
        expect(is.not_RegExp.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_RegExp: Should true for $value', ({value}) => {
        expect(is.not_RegExp.call({}, value)).toBe(true);
    });

});
