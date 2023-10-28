import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Primitive singel: call', () => {

    it.each(dataForGoodTesting)('is.primitive: Should true for $value', ({value}) => {
        expect(is.primitive.call([], value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.primitive: Should false for $value', ({value}) => {
        expect(is.primitive.call([], value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_primitive: Should false for $value', ({value}) => {
        expect(is.not_primitive.call([], value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_primitive: Should true for $value', ({value}) => {
        expect(is.not_primitive.call([], value)).toBe(true);
    });

});
