import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('windowsPhone singel: apply', () => {

    it.each(dataForGoodTesting)('is.windowsPhone: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.windowsPhone.apply({}, [])).toBe(true);
    });

    it.each(dataForBadTesting)('is.windowsPhone: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.windowsPhone.apply({}, [])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.windowsPhone: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.windowsPhone.apply({}, [])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.windowsPhone: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.windowsPhone.apply({}, [])).toBe(true);
    });

});
