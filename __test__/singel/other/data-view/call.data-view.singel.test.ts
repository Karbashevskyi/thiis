import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('DataView singel: call', () => {

    it.each(dataForGoodTesting)('is.DataView: Should true for $value', ({value}) => {
        expect(is.DataView.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.DataView: Should false for $value', ({value}) => {
        expect(is.DataView.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_DataView: Should false for $value', ({value}) => {
        expect(is.not_DataView.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_DataView: Should true for $value', ({value}) => {
        expect(is.not_DataView.call({}, value)).toBe(true);
    });

});
