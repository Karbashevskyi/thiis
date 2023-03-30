import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('browser singel: call', () => {

    it.each(dataForGoodTesting)('is.browser: Should true for $value', ({value}) => {
        IsConfig.state.navigator = value;
        expect(is.browser.call({})).toBe(true);
    });

    it.each(dataForBadTesting)('is.browser: Should false for $value', ({value}) => {
        IsConfig.state.navigator = value;
        expect(is.browser.call({})).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.browser: Should false for $value', ({value}) => {
        IsConfig.state.navigator = value;
        expect(is.not.browser.call({})).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.browser: Should true for $value', ({value}) => {
        IsConfig.state.navigator = value;
        expect(is.not.browser.call({})).toBe(true);
    });

});
