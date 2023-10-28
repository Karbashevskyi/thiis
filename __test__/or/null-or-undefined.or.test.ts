import {is} from '../../dist';


describe('undefined_or_null or', () => {

    const dataForGoodTesting: { value: any }[] = [
        {
            value: null
        },
        {
            value: undefined
        },
    ];

    const dataForBadTesting: { value: any }[] = [
        {
            value: '"undefined"'
        },
        {
            value: '"null"'
        },
        {
            value: ""
        },
        {
            value: ''
        },
        {
            value: ``
        },
        {
            value: Symbol()
        },
        {
            value: {}
        },
        {
            value: true
        },
        {
            value: BigInt(1)
        },
        {
            value: []
        },
        {
            value: false
        },
        {
            value: 0
        },
        {
            value: Function
        },
        {
            value: () => {
            }
        },
        {
            value: BigInt
        },
        {
            value: Symbol
        },
        {
            value: NaN
        },
    ];

    it.each(dataForGoodTesting)('is.undefined_or_null: Should true for $value', ({value}) => {
        expect(is.undefined_or_null(value)).toBe(true);
    });

    it.each(dataForGoodTesting)('is.undefined_null: Should false for $value', ({value}) => {
        expect(is.undefined_null(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.undefined_or_null: Should false for $value', ({value}) => {
        expect(is.undefined_or_null(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_undefined_or_null: Should false for $value', ({value}) => {
        expect(is.not_undefined_or_null(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_undefined_or_null: Should true for $value', ({value}) => {
        expect(is.not_undefined_or_null(value)).toBe(true);
    });

    it('"1.0.0" should true for is.not_null_or_undefined', () => {
        expect(is.not_null_or_undefined('"1.0.0"')).toBe(true);
    });

});
