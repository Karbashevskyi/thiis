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

    it.each(dataForGoodTesting)('is.not.ios: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.ios.apply({}, [])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.ios: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.ios.apply({}, [])).toBe(true);
    });

});
