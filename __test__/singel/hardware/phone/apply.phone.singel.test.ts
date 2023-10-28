import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('phone singel: apply', () => {

    it.each(dataForGoodTesting)('is.phone: Should true for $value', ({value}) => {
        IsConfig.state.screen.width = value;
        expect(is.phone.apply({}, [])).toBe(true);
    });

    it.each(dataForBadTesting)('is.phone: Should false for $value', ({value}) => {
        IsConfig.state.screen.width = value;
        expect(is.phone.apply({}, [])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_phone: Should false for $value', ({value}) => {
        IsConfig.state.screen.width = value;
        expect(is.not_phone.apply({}, [])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_phone: Should true for $value', ({value}) => {
        IsConfig.state.screen.width = value;
        expect(is.not_phone.apply({}, [])).toBe(true);
    });

});
