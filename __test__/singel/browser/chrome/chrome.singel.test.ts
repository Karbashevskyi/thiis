import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('chrome singel', () => {

    it.each(dataForGoodTesting)('is.chrome: Should true for $target', ({target, vendor}) => {
        IsConfig.state.userAgent = target;
        IsConfig.state.vendor = vendor;
        expect(is.chrome()).toBe(true);
    });

    it.each(dataForBadTesting)('is.chrome: Should false for $target', ({target, vendor}) => {
        IsConfig.state.userAgent = target;
        IsConfig.state.vendor = vendor;
        expect(is.chrome()).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.chrome: Should false for $target', ({target, vendor}) => {
        IsConfig.state.userAgent = target;
        IsConfig.state.vendor = vendor;
        expect(is.not.chrome()).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.chrome: Should true for $target', ({target, vendor}) => {
        IsConfig.state.userAgent = target;
        IsConfig.state.vendor = vendor;
        expect(is.not.chrome()).toBe(true);
    });

});

