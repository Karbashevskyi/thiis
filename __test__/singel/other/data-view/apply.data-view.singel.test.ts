import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('DataView singel: apply', () => {

    it.each(dataForGoodTesting)('is.DataView: Should true for $value', ({value}) => {
        expect(is.DataView.apply({} , [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.DataView: Should false for $value', ({value}) => {
        expect(is.DataView.apply({} , [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_DataView: Should false for $value', ({value}) => {
        expect(is.not_DataView.apply({} , [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_DataView: Should true for $value', ({value}) => {
        expect(is.not_DataView.apply({} , [value])).toBe(true);
    });

});
