import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('URIError singel', () => {

    it.each(dataForGoodTesting)('is.URIError: Should true for $value', ({value}) => {
        expect(is.URIError(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.URIError: Should false for $value', ({value}) => {
        expect(is.URIError(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_URIError: Should false for $value', ({value}) => {
        expect(is.not_URIError(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_URIError: Should true for $value', ({value}) => {
        expect(is.not_URIError(value)).toBe(true);
    });

});
