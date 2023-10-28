import {is} from '../../../../dist/';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Map singel: apply', () => {

    it.each(dataForGoodTesting)('is.Map: Should true for $value', ({value}) => {
        expect(is.Map.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.Map: Should false for $value', ({value}) => {
        expect(is.Map.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_Map: Should false for $value', ({value}) => {
        expect(is.not_Map.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_Map: Should true for $value', ({value}) => {
        expect(is.not_Map.apply({}, [value])).toBe(true);
    });

});
