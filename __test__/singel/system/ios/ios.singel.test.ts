import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('ios singel', () => {

    it.each(dataForGoodTesting)('is.ios: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.ios()).toBe(true);
    });

    it.each(dataForBadTesting)('is.ios: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.ios()).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.ios: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.ios()).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.ios: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.ios()).toBe(true);
    });

});

