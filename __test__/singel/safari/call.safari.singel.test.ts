import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('safari singel: call', () => {

    const navigator =  {
        userAgent: '[DEFAULT]'
    }

    beforeAll(() => {
        Object.defineProperty(window, 'navigator', {value: navigator});
    });

    it.each(dataForGoodTesting)('is.safari: Should true for $value', ({value}) => {
        navigator.userAgent = value;
        expect(is.safari.call({})).toBe(true);
    });

    it.each(dataForBadTesting)('is.safari: Should false for $value', ({value}) => {
        navigator.userAgent = value;
        expect(is.safari.call({})).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.safari: Should false for $value', ({value}) => {
        navigator.userAgent = value;
        expect(is.not.safari.call({})).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.safari: Should true for $value', ({value}) => {
        navigator.userAgent = value;
        expect(is.not.safari.call({})).toBe(true);
    });

});
