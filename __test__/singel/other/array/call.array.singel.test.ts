import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodAdvancedTesting, dataForGoodTesting} from './fixtures';


describe('array singel: call', () => {

    it.each(dataForGoodTesting)('is.array: Should true for $value', ({value}) => {
        expect(is.array.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.array: Should false for $value', ({value}) => {
        expect(is.array.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_array: Should false for $value', ({value}) => {
        expect(is.not_array.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_array: Should true for $value', ({value}) => {
        expect(is.not_array.call({}, value)).toBe(true);
    });

    it.each(dataForGoodAdvancedTesting)('is.array: Should true for $value & $classRef', ({value, classRef}) => {
        expect(is.array(value, classRef)).toBe(true);
    });

    it.each(dataForGoodAdvancedTesting)('is.not_array: Should false for $value & $classRef', ({value, classRef}) => {
        expect(is.not_array(value, classRef)).toBe(false);
    });


});
