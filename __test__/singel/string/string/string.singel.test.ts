import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('string singel', () => {

    it.each(dataForGoodTesting)('is.string: Should true for $value', ({value}) => {
        expect(is.string(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.string: Should false for $value', ({value}) => {
        expect(is.string(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_string: Should false for $value', ({value}) => {
        expect(is.not_string(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_string: Should true for $value', ({value}) => {
        expect(is.not_string(value)).toBe(true);
    });

    it('is.Map(new Map()) should true', () => {
        expect(is.Map(new Map())).toBe(true);
    });

    it('is.not_Map(new Map()) should false', () => {
        expect(is.not_Map(new Map())).toBe(false);
    });

    it('is.Map.apply({}, [new Map()]) should true', () => {
        expect(is.Map.apply({}, [new Map()])).toBe(true);
    });

    it('is.Map.call({}, new Map()) should true', () => {
        expect(is.Map.call({}, new Map())).toBe(true);
    });

    it('is.not_Map.apply({}, [new Map()]) should true', () => {
        expect(is.not_Map.apply({}, [new Map()])).toBe(false);
    });

    it('is.not_Map.call({}, new Map()) should true', () => {
        expect(is.not_Map.call({}, new Map())).toBe(false);
    });

});
