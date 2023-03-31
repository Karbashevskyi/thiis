import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('blackberry singel', () => {

    it.each(dataForGoodTesting)('is.blackberry: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.blackberry()).toBe(true);
    });

    it.each(dataForBadTesting)('is.blackberry: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.blackberry()).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.blackberry: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.blackberry()).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.blackberry: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.blackberry()).toBe(true);
    });

});

