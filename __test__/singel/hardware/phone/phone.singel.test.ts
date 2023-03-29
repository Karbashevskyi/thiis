import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('phone singel', () => {

    it.each(dataForGoodTesting)('is.phone: Should true for $value', ({value}) => {
        IsConfig.state.screen.width = value;
        expect(is.phone()).toBe(true);
    });

    it.each(dataForBadTesting)('is.phone: Should false for $value', ({value}) => {
        IsConfig.state.screen.width = value;
        expect(is.phone()).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.phone: Should false for $value', ({value}) => {
        IsConfig.state.screen.width = value;
        expect(is.not.phone()).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.phone: Should true for $value', ({value}) => {
        IsConfig.state.screen.width = value;
        expect(is.not.phone()).toBe(true);
    });

});

