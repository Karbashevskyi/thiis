import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('opera singel: call', () => {

    it.each(dataForGoodTesting)('is.opera: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.opera.call({})).toBe(true);
    });

    it.each(dataForBadTesting)('is.opera: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.opera.call({})).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_opera: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not_opera.call({})).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_opera: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not_opera.call({})).toBe(true);
    });

});
