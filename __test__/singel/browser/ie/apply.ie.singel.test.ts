import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('ie singel: apply', () => {

    it.each(dataForGoodTesting)('is.ie: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.ie.apply({}, [])).toBe(true);
    });

    it.each(dataForBadTesting)('is.ie: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.ie.apply({}, [])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_ie: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not_ie.apply({}, [])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_ie: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not_ie.apply({}, [])).toBe(true);
    });

});
