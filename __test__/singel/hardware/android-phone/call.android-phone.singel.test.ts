import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('androidPhone singel: call', () => {

    it.each(dataForGoodTesting)('is.androidPhone: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.androidPhone.call({})).toBe(true);
    });

    it.each(dataForBadTesting)('is.androidPhone: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.androidPhone.call({})).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.androidPhone: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.androidPhone.call({})).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.androidPhone: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.androidPhone.call({})).toBe(true);
    });

});
