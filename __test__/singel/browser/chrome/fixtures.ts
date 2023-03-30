export const dataForGoodTesting: { target: any, vendor: string, }[] = [
    {
        target: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36',
        vendor: 'Google Inc.'
    },
    {
        target: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36',
        vendor: 'Google Inc.'
    },
    {
        target: 'Mozilla/5.0 (Linux; Android 11; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.72 Mobile Safari/537.36 EdgA/46.3.3.5159',
        vendor: 'Google Inc.'
    },
];

export const dataForBadTesting: { target: any, vendor: string, }[] = [
    {
        target: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36',
        vendor: 'Google Inc.'
    },
    {
        target: 'undefined',
        vendor: 'Google Inc.'
    },
    {
        target: 'null',
        vendor: 'Google Inc.'
    },
    {
        target: 'hello',
        vendor: 'Google Inc.'
    },
    {
        target: 'hello123',
        vendor: 'Google Inc.'
    },
    {
        target: '192.168.1.1',
        vendor: 'Google Inc.'
    },
    {
        target: '255.255.255.0',
        vendor: 'Google Inc.'
    },
    {
        target: '01-23-45-67-89',
        vendor: 'Google Inc.'
    },
    {
        target: '10.0.0.1',
        vendor: 'Google Inc.'
    },
    {
        target: '172.16.0.1',
        vendor: 'Google Inc.'
    },
    {
        target: '',
        vendor: 'Google Inc.'
    },
    {
        target: '',
        vendor: 'Google Inc.'
    },
    {
        target: ``,
        vendor: 'Google Inc.'
    },
    {
        target: ``,
        vendor: 'Google Inc.'
    },
    {
        target: `3`,
        vendor: 'Google Inc.'
    },
    {
        target: `1`,
        vendor: 'Google Inc.'
    },
    {
        target: `2`,
        vendor: 'Google Inc.'
    },

    {
        target: '256.0.0.1',
        vendor: 'Google Inc.'
    },
    {
        target: '192.168.1.256',
        vendor: 'Google Inc.'
    },
    {
        target: '1.2.3.4.5',
        vendor: 'Google Inc.'
    },
    {
        target: '192.168.1',
        vendor: 'Google Inc.'
    },
    {
        target: '192.168.1.',
        vendor: 'Google Inc.'
    },
    {
        target: '.192.168.1.1',
        vendor: 'Google Inc.'
    },
    {
        target: '192.168.1.1.',
        vendor: 'Google Inc.'
    },
    {
        target: '192.168.1.1',
        vendor: 'Google Inc.'
    },
    {
        target: '255.255.255.0',
        vendor: 'Google Inc.'
    },
    {
        target: '10.0.0.1',
        vendor: 'Google Inc.'
    },
    {
        target: '172.16.0.1',
        vendor: 'Google Inc.'
    },
    {
        target: '00:11:22:33:44',
        vendor: 'Google Inc.'
    },
    {
        target: '00:11:22:33:44:55',
        vendor: 'Google Inc.'
    },
    {
        target: '2001:::1',
        vendor: 'Google Inc.'
    },
    {
        target: '::',
        vendor: 'Google Inc.'
    },
    {
        target: '::1',
        vendor: 'Google Inc.'
    },
    {
        target: '2001:db8:::2:1',
        vendor: 'Google Inc.'
    },
    {
        target: '2001:db8::1::',
        vendor: 'Google Inc.'
    },
    {
        target: '2001:db8::g:1',
        vendor: 'Google Inc.'
    },
    {
        target: '::ffff:192.0.2.256',
        vendor: 'Google Inc.'
    },
    {
        target: '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
        vendor: 'Google Inc.'
    },
    {
        target: '2001:db8:0:0:0:0:2:1',
        vendor: 'Google Inc.'
    },
    {
        target: '2001:db8::2:1',
        vendor: 'Google Inc.'
    },
    {
        target: '::ffff:192.0.2.128',
        vendor: 'Google Inc.'
    },
    {
        target: '2001:db8::567:1',
        vendor: 'Google Inc.'
    },
    {
        target: 'a1-b2-c3-d4-e5-f',
        vendor: 'Google Inc.'
    },
    {
        target: 'g1-h2-i3-j4-k5-l6',
        vendor: 'Google Inc.'
    },
    {
        target: '0050.348a.7a93',
        vendor: 'Google Inc.'
    },
    {
        target: '3550.b5e7.0124',
        vendor: 'Google Inc.'
    },
    {
        target: 'aa:bb:cc:dd:ee:ff',
        vendor: 'Google Inc.'
    },
    {
        target: '01-23-45-67-89-ab',
        vendor: 'Google Inc.'
    },
    {
        target: 'a1-b2-c3-d4-e5-f6',
        vendor: 'Google Inc.'
    },
    {
        target: 'in-kebab-case',
        vendor: 'Google Inc.'
    },
    {
        target: 'in_snake_case',
        vendor: 'Google Inc.'
    },
    {
        target: 'in-kebab_snake',
        vendor: 'Google Inc.'
    },
    {
        target: 'in_snake-kebab',
        vendor: 'Google Inc.'
    },
    {
        target: 'inCamelCase',
        vendor: 'Google Inc.'
    },
    {
        target: 'UPPER_CASE',
        vendor: 'Google Inc.'
    },
    {
        target: 'HELLO',
        vendor: 'Google Inc.'
    },
    {
        target: 'HELLO123',
        vendor: 'Google Inc.'
    },
    {
        target: 'HELLO123 HELLO',
        vendor: 'Google Inc.'
    },
    {
        target: 'a1B2c3d4e5f6g',
        vendor: 'Google Inc.'
    },
    {
        target: 'a1B2c3d4e5f6g',
        vendor: 'Google Inc.'
    },
    {
        target: 'Hello world, the "text" is only for: testing!',
        vendor: 'Google Inc.'
    },
    {
        target: 'helloWorld',
        vendor: 'Google Inc.'
    },
    {
        target: 'InPascalCase',
        vendor: 'Google Inc.'
    },
    {
        target: 'a1B2c3d4:e5f6',
        vendor: 'Google Inc.'
    },
    {
        target: 'inCamel-kebab',
        vendor: 'Google Inc.'
    },
    {
        target: 'inCamel_snake',
        vendor: 'Google Inc.'
    },
    {
        target: 'InPascal-kebab',
        vendor: 'Google Inc.'
    },
    {
        target: 'InPascal_snake',
        vendor: 'Google Inc.'
    },
    {
        target: 'inCamel-kebab_snake',
        vendor: 'Google Inc.'
    },
    {
        target: 'inCamel_snake-kebab',
        vendor: 'Google Inc.'
    },
    {
        target: 'in_snakeCamel-kebab',
        vendor: 'Google Inc.'
    },
    {
        target: 'in_snake-kebabCamel',
        vendor: 'Google Inc.'
    },
    {
        target: 'in_snakeCamelCamel-kebab',
        vendor: 'Google Inc.'
    },
    {
        target: 'in-kebabCamel_snakeCamel-kebab_snake',
        vendor: 'Google Inc.'
    },
    {
        target: Symbol(),
        vendor: 'Google Inc.'
    },
    {
        target: {},
        vendor: 'Google Inc.'
    },
    {
        target: true,
        vendor: 'Google Inc.'
    },
    {
        target: BigInt(1),
        vendor: 'Google Inc.'
    },
    {
        target: [],
        vendor: 'Google Inc.'
    },
    {
        target: false,
        vendor: 'Google Inc.'
    },
    {
        target: 0,
        vendor: 'Google Inc.'
    },
    {
        target: null,
        vendor: 'Google Inc.'
    },
    {
        target: undefined,
        vendor: 'Google Inc.'
    },
    {
        target: Function,
        vendor: 'Google Inc.'
    },
    {
        target: () => {},
        vendor: 'Google Inc.'
    },
    {
        target: BigInt,
        vendor: 'Google Inc.'
    },
    {
        target: Symbol,
        vendor: 'Google Inc.'
    },
    {
        target: NaN,
        vendor: 'Google Inc.'
    },
];
