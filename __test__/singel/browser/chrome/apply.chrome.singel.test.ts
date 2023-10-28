import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('chrome singel: apply', () => {

    it.each(dataForGoodTesting)('is.chrome: Should true for $target', ({target, vendor}) => {
        IsConfig.state.userAgent = target;
        IsConfig.state.vendor = vendor;
        expect(is.chrome.apply({}, [])).toBe(true);
    });

    it.each(dataForBadTesting)('is.chrome: Should false for $target', ({target, vendor}) => {
        IsConfig.state.userAgent = target;
        IsConfig.state.vendor = vendor;
        expect(is.chrome.apply({}, [])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_chrome: Should false for $target', ({target, vendor}) => {
        IsConfig.state.userAgent = target;
        IsConfig.state.vendor = vendor;
        expect(is.not_chrome.apply({}, [])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_chrome: Should true for $target', ({target, vendor}) => {
        IsConfig.state.userAgent = target;
        IsConfig.state.vendor = vendor;
        expect(is.not_chrome.apply({}, [])).toBe(true);
    });

});
