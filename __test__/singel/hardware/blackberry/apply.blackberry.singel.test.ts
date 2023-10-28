import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('blackberry singel: apply', () => {

    it.each(dataForGoodTesting)('is.blackberry: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.blackberry.apply({}, [])).toBe(true);
    });

    it.each(dataForBadTesting)('is.blackberry: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.blackberry.apply({}, [])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_blackberry: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not_blackberry.apply({}, [])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_blackberry: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not_blackberry.apply({}, [])).toBe(true);
    });

});
