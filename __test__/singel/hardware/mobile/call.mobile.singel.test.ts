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

    it.each(dataForGoodTesting)('is.not_mobile: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not_mobile.call({})).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_mobile: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not_mobile.call({})).toBe(true);
    });

});
