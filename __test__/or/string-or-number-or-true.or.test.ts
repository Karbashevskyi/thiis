import {is} from '../../dist';


describe('string_or_number_or_true or', () => {

    const dataForGoodTesting: { value: any }[] = [
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
            value: true
        },
        {
            value: 0
        },
        {
            value: 'undefined'
        },
        {
            value: 'null'
        },
    ];

    const dataForBadTesting: { value: any }[] = [
        {
            value: NaN
        },
        {
            value: undefined
        },
        {
            value: {}
        },
        {
            value: []
        },
        {
            value: null
        },
        {
            value: Symbol()
        },
        {
            value: BigInt(1)
        },
        {
            value: false
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
    ];

    it.each(dataForGoodTesting)('is.string_or_number_or_true: Should true for $value', ({value}) => {
        expect(is.string_or_number_or_true(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.string_or_number_or_true: Should false for $value', ({value}) => {
        expect(is.string_or_number_or_true(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_string_or_number_or_true: Should false for $value', ({value}) => {
        expect(is.not_string_or_number_or_true(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_string_or_number_or_true: Should true for $value', ({value}) => {
        expect(is.not_string_or_number_or_true(value)).toBe(true);
    });

});
