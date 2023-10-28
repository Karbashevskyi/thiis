import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Error singel: call', () => {


    it.each(dataForGoodTesting)('is.Error: Should true for $value', ({value}) => {
        expect(is.Error.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.Error: Should false for $value', ({value}) => {
        expect(is.Error.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_Error: Should false for $value', ({value}) => {
        expect(is.not_Error.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_Error: Should true for $value', ({value}) => {
        expect(is.not_Error.call({}, value)).toBe(true);
    });

});
