import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('ipv6 singel', () => {


    it.each(dataForGoodTesting)('is.ipv6: Should true for $value', ({value}) => {
        expect(is.ipv6(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.ipv6: Should false for $value', ({value}) => {
        expect(is.ipv6(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_ipv6: Should false for $value', ({value}) => {
        expect(is.not_ipv6(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_ipv6: Should true for $value', ({value}) => {
        expect(is.not_ipv6(value)).toBe(true);
    });

});
