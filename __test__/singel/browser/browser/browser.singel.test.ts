import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('browser singel', () => {

    it.each(dataForGoodTesting)('is.browser: Should true for $value', ({value}) => {
        IsConfig.state.navigator = value;
        expect(is.browser()).toBe(true);
    });

    it.each(dataForBadTesting)('is.browser: Should false for $value', ({value}) => {
        IsConfig.state.navigator = value;
        expect(is.browser()).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_browser: Should false for $value', ({value}) => {
        IsConfig.state.navigator = value;
        expect(is.not_browser()).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_browser: Should true for $value', ({value}) => {
        IsConfig.state.navigator = value;
        expect(is.not_browser()).toBe(true);
    });

});

