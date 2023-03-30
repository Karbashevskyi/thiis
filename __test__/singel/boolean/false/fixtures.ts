

export const dataForGoodTesting: {value: any}[] = [
    {
        value: false
    },
    {
        value: Boolean(0)
    },
    {
        value: Boolean()
    },
];

export const dataForBadTesting: {value: any}[] = [
    {
        value: Boolean(1)
    },
    {
        value: Boolean(-1)
    },
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
        value: []
    },
    {
        value: true
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
