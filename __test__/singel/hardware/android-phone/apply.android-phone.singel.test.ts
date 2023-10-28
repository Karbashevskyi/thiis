import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('androidPhone singel: apply', () => {

    it.each(dataForGoodTesting)('is.androidPhone: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.androidPhone.apply({}, [])).toBe(true);
    });

    it.each(dataForBadTesting)('is.androidPhone: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.androidPhone.apply({}, [])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_androidPhone: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not_androidPhone.apply({}, [])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_androidPhone: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not_androidPhone.apply({}, [])).toBe(true);
    });

});
