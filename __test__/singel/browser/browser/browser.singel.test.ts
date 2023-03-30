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

    it.each(dataForGoodTesting)('is.not.browser: Should false for $value', ({value}) => {
        IsConfig.state.navigator = value;
        expect(is.not.browser()).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.browser: Should true for $value', ({value}) => {
        IsConfig.state.navigator = value;
        expect(is.not.browser()).toBe(true);
    });

});

