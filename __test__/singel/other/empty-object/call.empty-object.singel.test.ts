import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodCaseTesting, dataForGoodTesting} from './fixtures';

describe('Empty Object singel: call', () => {


    it.each(dataForGoodTesting)('is.object_empty: Should true for $value', ({value}) => {
        expect(is.object_empty.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.object_empty: Should false for $value', ({value}) => {
        expect(is.object_empty.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.object_not_empty: Should false for $value', ({value}) => {
        expect(is.object_not_empty.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.object_not_empty: Should false for $value', ({value}) => {
        expect(is.object_not_empty.call({}, value)).toBe(false);
    });

    it.each(dataForGoodCaseTesting)('is.object_not_empty: Should true for $value', ({value}) => {
        expect(is.object_not_empty.call({}, value)).toBe(true);
    });

});
