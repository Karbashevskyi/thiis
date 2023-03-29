import {is, IsConfig} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('firefox singel: call', () => {

    // const navigator =  {
    //     userAgent: '[DEFAULT]'
    // }
    //
    // beforeAll(() => {
    //     Object.defineProperty(window, 'navigator', {value: navigator});
    // });

    it.each(dataForGoodTesting)('is.firefox: Should true for $value', ({value}) => {
        // navigator.userAgent = value;
        IsConfig.state.userAgent = value;
        expect(is.firefox.call({})).toBe(true);
    });

    it.each(dataForBadTesting)('is.firefox: Should false for $value', ({value}) => {
        // navigator.userAgent = value;
        IsConfig.state.userAgent = value;
        expect(is.firefox.call({})).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.firefox: Should false for $value', ({value}) => {
        // navigator.userAgent = value;
        IsConfig.state.userAgent = value;
        expect(is.not.firefox.call({})).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.firefox: Should true for $value', ({value}) => {
        // navigator.userAgent = value;
        IsConfig.state.userAgent = value;
        expect(is.not.firefox.call({})).toBe(true);
    });

});
