import {is} from '../../dist';


describe('null_or_empty or', () => {

    const dataForGoodTesting: { value: any }[] = [
        {
            value: null
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
            value: {}
        },
        {
            value: []
        },
    ];

    const dataForBadTesting: { value: any }[] = [
        {
            value: Symbol()
        },
        {
            value: undefined
        },
        {
            value: NaN
        },
        {
            value: 'undefined'
        },
        {
            value: 'null'
        },
        {
            value: true
        },
        {
            value: BigInt(1)
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
    ];

    it.each(dataForGoodTesting)('is.null_or_empty: Should true for $value', ({value}) => {
        expect(is.null_or_empty(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.null_or_empty: Should false for $value', ({value}) => {
        expect(is.null_or_empty(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_null_or_empty: Should false for $value', ({value}) => {
        expect(is.not_null_or_empty(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_null_or_empty: Should true for $value', ({value}) => {
        expect(is.not_null_or_empty(value)).toBe(true);
    });

});
