import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('opera singel: apply', () => {

    it.each(dataForGoodTesting)('is.opera: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.opera.apply({}, [])).toBe(true);
    });

    it.each(dataForBadTesting)('is.opera: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.opera.apply({}, [])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.opera: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.opera.apply({}, [])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.opera: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.opera.apply({}, [])).toBe(true);
    });

});
