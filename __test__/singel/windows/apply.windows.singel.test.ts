import {is, IsConfig} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('windows singel: apply', () => {

    it.each(dataForGoodTesting)('is.windows: Should true for $value', ({value}) => {
        IsConfig.state.platform = value;
        expect(is.windows.apply({}, [])).toBe(true);
    });

    it.each(dataForBadTesting)('is.windows: Should false for $value', ({value}) => {
        IsConfig.state.platform = value;
        expect(is.windows.apply({}, [])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.windows: Should false for $value', ({value}) => {
        IsConfig.state.platform = value;
        expect(is.not.windows.apply({}, [])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.windows: Should true for $value', ({value}) => {
        IsConfig.state.platform = value;
        expect(is.not.windows.apply({}, [])).toBe(true);
    });

});
