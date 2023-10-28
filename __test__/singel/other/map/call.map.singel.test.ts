import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Map singel: call', () => {


    it.each(dataForGoodTesting)('is.Map: Should true for $value', ({value}) => {
        expect(is.Map.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.Map: Should false for $value', ({value}) => {
        expect(is.Map.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_Map: Should false for $value', ({value}) => {
        expect(is.not_Map.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_Map: Should true for $value', ({value}) => {
        expect(is.not_Map.call({}, value)).toBe(true);
    });

});
