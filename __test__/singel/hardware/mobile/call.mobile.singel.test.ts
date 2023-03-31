import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('mobile singel: call', () => {

    it.each(dataForGoodTesting)('is.mobile: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.mobile.call({})).toBe(true);
    });

    it.each(dataForBadTesting)('is.mobile: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.mobile.call({})).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.mobile: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.mobile.call({})).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.mobile: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.mobile.call({})).toBe(true);
    });

});
