import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('iphone singel: call', () => {

    it.each(dataForGoodTesting)('is.iphone: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.iphone.call({})).toBe(true);
    });

    it.each(dataForBadTesting)('is.iphone: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.iphone.call({})).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_iphone: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not_iphone.call({})).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_iphone: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not_iphone.call({})).toBe(true);
    });

});
