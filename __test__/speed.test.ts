import {is} from '../src';
const is_js = require('../sandbox/is_js/is');

describe('Speed Test', () => {
    it('Speed Test is.string()', () => {
        let variable = {a: 1};
        console.time('is.object.not.empty()');
        for (let i = 0; i < 100_000; i++) {
            // @ts-ignore
            is.object.not.empty(variable)
        }
        console.timeEnd('is.object.not.empty()');
        console.time('string');
        for (let i = 0; i < 100_000; i++) {
            if (typeof variable === 'object' && variable !== null && !Array.isArray(variable) && Object.keys(variable)?.length) {
            }
        }
        console.timeEnd('string');

        console.time('is_js.is.object.not.empty');
        for (let i = 0; i < 100_000; i++) {
            if (is_js.object({a: 1}) && is_js.not.empty({a: 1})) {

            }
        }
        console.timeEnd('is_js.is.object.not.empty');
        expect(true).toBeTruthy();
    });

});
