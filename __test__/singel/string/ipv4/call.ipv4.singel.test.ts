import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('ipv4 singel: call', () => {


    it.each(dataForGoodTesting)('is.ipv4: Should true for $value', ({value}) => {
        expect(is.ipv4.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.ipv4: Should false for $value', ({value}) => {
        expect(is.ipv4.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_ipv4: Should false for $value', ({value}) => {
        expect(is.not_ipv4.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_ipv4: Should true for $value', ({value}) => {
        expect(is.not_ipv4.call({}, value)).toBe(true);
    });

});
