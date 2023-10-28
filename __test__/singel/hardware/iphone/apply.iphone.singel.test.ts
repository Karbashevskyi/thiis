import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('iphone singel: apply', () => {

    it.each(dataForGoodTesting)('is.iphone: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.iphone.apply({}, [])).toBe(true);
    });

    it.each(dataForBadTesting)('is.iphone: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.iphone.apply({}, [])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_iphone: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not_iphone.apply({}, [])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_iphone: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not_iphone.apply({}, [])).toBe(true);
    });

});
