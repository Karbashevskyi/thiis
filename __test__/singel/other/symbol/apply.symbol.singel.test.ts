import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('symbol singel: apply', () => {

    it.each(dataForGoodTesting)('is.symbol: Should true for $value', ({value}) => {
        expect(is.symbol.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.symbol: Should false for $value', ({value}) => {
        expect(is.symbol.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_symbol: Should false for $value', ({value}) => {
        expect(is.not_symbol.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_symbol: Should true for $value', ({value}) => {
        expect(is.not_symbol.apply({}, [value])).toBe(true);
    });

});
