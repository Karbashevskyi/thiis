import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('Model singel: call', () => {

    it.each(dataForGoodTesting)('is.Person: Should true for $value', ({value}) => {
        expect(is.Person.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.Person: Should false for $value', ({value}) => {
        expect(is.Person.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_Person: Should false for $value', ({value}) => {
        expect(is.not_Person.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_Person: Should true for $value', ({value}) => {
        expect(is.not_Person.call({}, value)).toBe(true);
    });

});
