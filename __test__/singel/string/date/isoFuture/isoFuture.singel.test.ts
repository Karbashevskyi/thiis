import {is} from '../../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('isoFuture singel', () => {

    it.each(dataForGoodTesting)('is.isoFuture: Should true for $value', ({value}) => {
        expect(is.isoFuture(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.isoFuture: Should false for $value', ({value}) => {
        expect(is.isoFuture(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_isoFuture: Should false for $value', ({value}) => {
        expect(is.not_isoFuture(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_isoFuture: Should true for $value', ({value}) => {
        expect(is.not_isoFuture(value)).toBe(true);
    });

});
