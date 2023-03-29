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

    it.each(dataForGoodTesting)('is.not.ipad: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.ipad.call({})).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.ipad: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.ipad.call({})).toBe(true);
    });

});
