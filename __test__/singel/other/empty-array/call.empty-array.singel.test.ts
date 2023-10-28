import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodCaseTesting, dataForGoodTesting} from './fixtures';

describe('Empty Array singel: call', () => {

    it.each(dataForGoodTesting)('is.array_empty: Should true for $value', ({value}) => {
        expect(is.array_empty.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.array_empty: Should false for $value', ({value}) => {
        expect(is.array_empty.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.array_not_empty: Should false for $value', ({value}) => {
        expect(is.array_not_empty.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.array_not_empty: Should false for $value', ({value}) => {
        expect(is.array_not_empty.call({}, value)).toBe(false);
    });

    it.each(dataForGoodCaseTesting)('is.array_not_empty: Should true for $value', ({value}) => {
        expect(is.array_not_empty.call({}, value)).toBe(true);
    });

});
