import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('ios singel: apply', () => {

    it.each(dataForGoodTesting)('is.ios: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.ios.apply({}, [])).toBe(true);
    });

    it.each(dataForBadTesting)('is.ios: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.ios.apply({}, [])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_ios: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not_ios.apply({}, [])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_ios: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not_ios.apply({}, [])).toBe(true);
    });

});
