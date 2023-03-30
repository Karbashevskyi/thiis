import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('mac singel', () => {

    it.each(dataForGoodTesting)('is.mac: Should true for $value', ({value}) => {
        IsConfig.state.platform = value;
        expect(is.mac()).toBe(true);
    });

    it.each(dataForBadTesting)('is.mac: Should false for $value', ({value}) => {
        IsConfig.state.platform = value;
        expect(is.mac()).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.mac: Should false for $value', ({value}) => {
        IsConfig.state.platform = value;
        expect(is.not.mac()).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.mac: Should true for $value', ({value}) => {
        IsConfig.state.platform = value;
        expect(is.not.mac()).toBe(true);
    });

});

