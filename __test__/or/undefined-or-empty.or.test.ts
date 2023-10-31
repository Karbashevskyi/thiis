import {is} from '../../dist';


describe('undefined_or_empty or', () => {

    const dataForGoodTesting: { value: any }[] = [
        {
            value: undefined
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
            value: null
        },
        {
            value: Symbol()
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

    it.each(dataForGoodTesting)('is.undefined_or_empty: Should true for $value', ({value}) => {
        expect(is.undefined_or_empty(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.undefined_or_empty: Should false for $value', ({value}) => {
        expect(is.undefined_or_empty(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_undefined_or_empty: Should false for $value', ({value}) => {
        expect(is.not_undefined_or_empty(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_undefined_or_empty: Should true for $value', ({value}) => {
        expect(is.not_undefined_or_empty(value)).toBe(true);
    });

});
