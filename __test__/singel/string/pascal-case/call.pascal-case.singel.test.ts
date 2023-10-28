import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('pascalCase singel: call', () => {

    it.each(dataForGoodTesting)('is.pascalCase: Should true for $value', ({value}) => {
        expect(is.pascalCase.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.pascalCase: Should false for $value', ({value}) => {
        expect(is.pascalCase.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_pascalCase: Should false for $value', ({value}) => {
        expect(is.not_pascalCase.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_pascalCase: Should true for $value', ({value}) => {
        expect(is.not_pascalCase.call({}, value)).toBe(true);
    });

});
