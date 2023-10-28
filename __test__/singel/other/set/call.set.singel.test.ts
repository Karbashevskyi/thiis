import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Set singel: call', () => {


    it.each(dataForGoodTesting)('is.Set: Should true for $value', ({value}) => {
        expect(is.Set.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.Set: Should false for $value', ({value}) => {
        expect(is.Set.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_Set: Should false for $value', ({value}) => {
        expect(is.not_Set.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_Set: Should true for $value', ({value}) => {
        expect(is.not_Set.call({}, value)).toBe(true);
    });

});
