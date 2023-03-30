import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('chrome singel: call', () => {

    it.each(dataForGoodTesting)('is.chrome: Should true for $target', ({target, vendor}) => {
        IsConfig.state.userAgent = target;
        IsConfig.state.vendor = vendor;
        expect(is.chrome.call({})).toBe(true);
    });

    it.each(dataForBadTesting)('is.chrome: Should false for $target', ({target, vendor}) => {
        IsConfig.state.userAgent = target;
        IsConfig.state.vendor = vendor;
        expect(is.chrome.call({})).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.chrome: Should false for $target', ({target, vendor}) => {
        IsConfig.state.userAgent = target;
        IsConfig.state.vendor = vendor;
        expect(is.not.chrome.call({})).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.chrome: Should true for $target', ({target, vendor}) => {
        IsConfig.state.userAgent = target;
        IsConfig.state.vendor = vendor;
        expect(is.not.chrome.call({})).toBe(true);
    });

});
