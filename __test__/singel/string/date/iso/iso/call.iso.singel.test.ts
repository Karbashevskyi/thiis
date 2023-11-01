import {is} from '../../../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('iso singel: call', () => {

    it.each(dataForGoodTesting)('is.iso: Should true for $value', ({value}) => {
        expect(is.iso.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.iso: Should false for $value', ({value}) => {
        expect(is.iso.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_iso: Should false for $value', ({value}) => {
        expect(is.not_iso.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_iso: Should true for $value', ({value}) => {
        expect(is.not_iso.call({}, value)).toBe(true);
    });

});
