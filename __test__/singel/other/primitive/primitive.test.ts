import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Primitive singel', () => {


    it.each(dataForGoodTesting)('is.primitive: Should true for $value', ({value}) => {
        expect(is.primitive(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.primitive: Should false for $value', ({value}) => {
        expect(is.primitive(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_primitive: Should false for $value', ({value}) => {
        expect(is.not_primitive(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_primitive: Should true for $value', ({value}) => {
        expect(is.not_primitive(value)).toBe(true);
    });

});
