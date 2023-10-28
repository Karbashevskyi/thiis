import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('windows singel: call', () => {

    it.each(dataForGoodTesting)('is.windows: Should true for $value', ({value}) => {
        IsConfig.state.platform = value;
        expect(is.windows.call({})).toBe(true);
    });

    it.each(dataForBadTesting)('is.windows: Should false for $value', ({value}) => {
        IsConfig.state.platform = value;
        expect(is.windows.call({})).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_windows: Should false for $value', ({value}) => {
        IsConfig.state.platform = value;
        expect(is.not_windows.call({})).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_windows: Should true for $value', ({value}) => {
        IsConfig.state.platform = value;
        expect(is.not_windows.call({})).toBe(true);
    });

});
