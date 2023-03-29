import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('ipad singel: apply', () => {

    it.each(dataForGoodTesting)('is.ipad: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.ipad.apply({}, [])).toBe(true);
    });

    it.each(dataForBadTesting)('is.ipad: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.ipad.apply({}, [])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.ipad: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.ipad.apply({}, [])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.ipad: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.ipad.apply({}, [])).toBe(true);
    });

});
