import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Model singel: apply', () => {


    it.each(dataForGoodTesting)('is.Person: Should true for $value', ({value}) => {
        expect(is.Person.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.Person: Should false for $value', ({value}) => {
        expect(is.Person.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_Person: Should false for $value', ({value}) => {
        expect(is.not_Person.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_Person: Should true for $value', ({value}) => {
        expect(is.not_Person.apply({}, [value])).toBe(true);
    });

});
