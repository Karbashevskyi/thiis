import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('ipod singel: call', () => {

    it.each(dataForGoodTesting)('is.ipod: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.ipod.call({})).toBe(true);
    });

    it.each(dataForBadTesting)('is.ipod: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.ipod.call({})).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.ipod: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.ipod.call({})).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.ipod: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.ipod.call({})).toBe(true);
    });

});
