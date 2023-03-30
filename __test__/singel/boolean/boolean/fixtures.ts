

export const dataForGoodTesting: {value: any}[] = [
    {
        value: true
    },
    {
        value: false
    },
    {
        value: Boolean()
    },
    {
        value: Boolean(1)
    },
    {
        value: Boolean(0)
    }
];

export const dataForBadTesting: {value: any}[] = [
    {
        value: 'undefined'
    },
    {
        value: 'null'
    },
    {
        value: Symbol()
    },
    {
        value: BigInt(1)
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
    {
        value: 0
    },
    {
        value: null
    },
    {
        value: undefined
    },
    {
        value: Function
    },
    {
        value: () => {}
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
