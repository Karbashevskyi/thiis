import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('camelCase singel: call', () => {

    it.each(dataForGoodTesting)('is.camelCase: Should true for $value', ({value}) => {
        expect(is.camelCase.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.camelCase: Should false for $value', ({value}) => {
        expect(is.camelCase.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_camelCase: Should false for $value', ({value}) => {
        expect(is.not_camelCase.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_camelCase: Should true for $value', ({value}) => {
        expect(is.not_camelCase.call({}, value)).toBe(true);
    });

});
