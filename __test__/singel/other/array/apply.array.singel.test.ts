import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodAdvancedTesting, dataForGoodTesting} from './fixtures';


describe('array singel: apply', () => {

    it.each(dataForGoodTesting)('is.array: Should true for $value', ({value}) => {
        expect(is.array.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.array: Should false for $value', ({value}) => {
        expect(is.array.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_array: Should false for $value', ({value}) => {
        expect(is.not_array.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_array: Should true for $value', ({value}) => {
        expect(is.not_array.apply({}, [value])).toBe(true);
    });

    it.each(dataForGoodAdvancedTesting)('is.array: Should true for $value & $classRef', ({value, classRef}) => {
        expect(is.array(value, classRef)).toBe(true);
    });

    it.each(dataForGoodAdvancedTesting)('is.not_array: Should false for $value & $classRef', ({value, classRef}) => {
        expect(is.not_array(value, classRef)).toBe(false);
    });


});
