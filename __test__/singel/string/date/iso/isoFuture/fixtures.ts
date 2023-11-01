export const dataForGoodTesting: { value: any }[] = [
    {
        value: new Date(Date.now() + 10_000).toISOString(),
    }
];

export const dataForBadTesting: { value: any }[] = [
    {
        value: new Date().toISOString(),
    },
    {
        value: '2022-01-15T12:34:56.789Z'
    },
    {
        value: 'undefined'
    },
    {
        value: 'null'
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
        value: ``
    },
    {
        value: `3`
    },
    {
        value: `1`
    },
    {
        value: `2`
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
        value: null
    },
    {
        value: undefined
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
