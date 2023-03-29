import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('firefox singel: apply', () => {

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
        expect(is.firefox.apply({}, [])).toBe(true);
    });

    it.each(dataForBadTesting)('is.firefox: Should false for $value', ({value}) => {
        // navigator.userAgent = value;
        IsConfig.state.userAgent = value;
        expect(is.firefox.apply({}, [])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.firefox: Should false for $value', ({value}) => {
        // navigator.userAgent = value;
        IsConfig.state.userAgent = value;
        expect(is.not.firefox.apply({}, [])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.firefox: Should true for $value', ({value}) => {
        // navigator.userAgent = value;
        IsConfig.state.userAgent = value;
        expect(is.not.firefox.apply({}, [])).toBe(true);
    });

});
