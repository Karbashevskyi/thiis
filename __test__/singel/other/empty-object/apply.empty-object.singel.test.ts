import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodCaseTesting, dataForGoodTesting} from './fixtures';


describe('Empty Object singel: apply', () => {

    it.each(dataForGoodTesting)('is.object_empty: Should true for $value', ({value}) => {
        expect(is.object_empty.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.object_empty: Should false for $value', ({value}) => {
        expect(is.object_empty.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.object_not_empty: Should false for $value', ({value}) => {
        expect(is.object_not_empty.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.object_not_empty: Should false for $value', ({value}) => {
        expect(is.object_not_empty.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodCaseTesting)('is.object_not_empty: Should true for $value', ({value}) => {
        expect(is.object_not_empty.apply({}, [value])).toBe(true);
    });

});
