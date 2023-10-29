import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('strict_space singel: call', () => {

    it.each(dataForGoodTesting)('is.strict_space: Should true for $value', ({value}) => {
        expect(is.strict_space.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.strict_space: Should false for $value', ({value}) => {
        expect(is.strict_space.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_strict_space: Should false for $value', ({value}) => {
        expect(is.not_strict_space.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_strict_space: Should true for $value', ({value}) => {
        expect(is.not_strict_space.call({}, value)).toBe(true);
    });

});
