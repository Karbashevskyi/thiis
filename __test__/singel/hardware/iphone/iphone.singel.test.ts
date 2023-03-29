import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('iphone singel', () => {

    it.each(dataForGoodTesting)('is.iphone: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.iphone()).toBe(true);
    });

    it.each(dataForBadTesting)('is.iphone: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.iphone()).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.iphone: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.iphone()).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.iphone: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.iphone()).toBe(true);
    });

});

