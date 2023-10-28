import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Date singel: call', () => {

    it.each(dataForGoodTesting)('is.Date: Should true for $value', ({value}) => {
        expect(is.Date.call({} ,value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.Date: Should false for $value', ({value}) => {
        expect(is.Date.call({} ,value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_Date: Should false for $value', ({value}) => {
        expect(is.not_Date.call({} ,value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_Date: Should true for $value', ({value}) => {
        expect(is.not_Date.call({} ,value)).toBe(true);
    });

});
