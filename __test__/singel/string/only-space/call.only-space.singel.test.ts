import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('onlySpace singel: call', () => {

    it.each(dataForGoodTesting)('is.onlySpace: Should true for $value', ({value}) => {
        expect(is.onlySpace.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.onlySpace: Should false for $value', ({value}) => {
        expect(is.onlySpace.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_onlySpace: Should false for $value', ({value}) => {
        expect(is.not_onlySpace.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_onlySpace: Should true for $value', ({value}) => {
        expect(is.not_onlySpace.call({}, value)).toBe(true);
    });

});
