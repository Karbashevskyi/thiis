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

    it.each(dataForGoodTesting)('is.not_mac: Should false for $value', ({value}) => {
        IsConfig.state.platform = value;
        expect(is.not_mac()).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_mac: Should true for $value', ({value}) => {
        IsConfig.state.platform = value;
        expect(is.not_mac()).toBe(true);
    });

});

