
export const dataForGoodTesting: {value: any}[] = [
    {
        value: true
    },
    {
        value: Boolean(1)
    },
    {
        value: Boolean(-1)
    },
];

export const dataForBadTesting: {value: any}[] = [
    {
        value: Boolean(0)
    },
    {
        value: 'null'
    },
    {
        value: 'undefined'
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
        value: false
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
