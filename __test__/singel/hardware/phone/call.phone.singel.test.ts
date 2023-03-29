import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('phone singel: call', () => {

    it.each(dataForGoodTesting)('is.phone: Should true for $value', ({value}) => {
        IsConfig.state.screen.width = value;
        expect(is.phone.call({})).toBe(true);
    });

    it.each(dataForBadTesting)('is.phone: Should false for $value', ({value}) => {
        IsConfig.state.screen.width = value;
        expect(is.phone.call({})).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.phone: Should false for $value', ({value}) => {
        IsConfig.state.screen.width = value;
        expect(is.not.phone.call({})).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.phone: Should true for $value', ({value}) => {
        IsConfig.state.screen.width = value;
        expect(is.not.phone.call({})).toBe(true);
    });

});
