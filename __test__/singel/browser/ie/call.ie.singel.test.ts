import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('ie singel: call', () => {

    it.each(dataForGoodTesting)('is.ie: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.ie.call({})).toBe(true);
    });

    it.each(dataForBadTesting)('is.ie: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.ie.call({})).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_ie: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not_ie.call({})).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_ie: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not_ie.call({})).toBe(true);
    });

});
