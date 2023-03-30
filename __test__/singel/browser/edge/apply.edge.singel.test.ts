import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('edge singel: apply', () => {

    it.each(dataForGoodTesting)('is.edge: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.edge.apply({}, [])).toBe(true);
    });

    it.each(dataForBadTesting)('is.edge: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.edge.apply({}, [])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.edge: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.edge.apply({}, [])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.edge: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.not.edge.apply({}, [])).toBe(true);
    });

});
