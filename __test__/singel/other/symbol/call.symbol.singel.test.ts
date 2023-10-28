import {is} from '../../../../dist';

import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('symbol singel: call', () => {


    it.each(dataForGoodTesting)('is.symbol: Should true for $value', ({value}) => {
        expect(is.symbol.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.symbol: Should false for $value', ({value}) => {
        expect(is.symbol.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_symbol: Should false for $value', ({value}) => {
        expect(is.not_symbol.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_symbol: Should true for $value', ({value}) => {
        expect(is.not_symbol.call({}, value)).toBe(true);
    });

});
