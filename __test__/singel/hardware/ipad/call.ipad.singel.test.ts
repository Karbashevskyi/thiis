import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('ipad singel: call', () => {

    it.each(dataForGoodTesting)('is.ipad: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.ipad.call({})).toBe(true);
    });

    it.each(dataForBadTesting)('is.ipad: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.ipad.call({})).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_ipad: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not_ipad.call({})).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_ipad: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not_ipad.call({})).toBe(true);
    });

});
