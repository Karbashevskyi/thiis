import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('android singel', () => {

    // const navigator =  {
    //     userAgent: '[DEFAULT]'
    // }
    //
    // beforeAll(() => {
    //     Object.defineProperty(window, 'navigator', {value: navigator});
    // });

    it.each(dataForGoodTesting)('is.android: Should true for $value', ({value}) => {
        // navigator.userAgent = value;
        IsConfig.state.userAgent = value;
        expect(is.android()).toBe(true);
    });

    it.each(dataForBadTesting)('is.android: Should false for $value', ({value}) => {
        // navigator.userAgent = value;
        IsConfig.state.userAgent = value;
        expect(is.android()).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.android: Should false for $value', ({value}) => {
        // navigator.userAgent = value;
        IsConfig.state.userAgent = value;
        expect(is.not.android()).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.android: Should true for $value', ({value}) => {
        // navigator.userAgent = value;
        IsConfig.state.userAgent = value;
        expect(is.not.android()).toBe(true);
    });

});

