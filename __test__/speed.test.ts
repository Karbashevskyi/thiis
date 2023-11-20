import {is} from '../dist';

describe('Speed Test', () => {
    it('Speed Test is.object_not_empty()', () => {
        const variable = {a: 1};
        console.time('is.object_not_empty()');
        for (let i = 0; i < 1_000_000; i++) {
            if (is.object_not_empty(variable)) {

            }
        }
        console.timeEnd('is.object_not_empty()');
        // console.time('string');
        // for (let i = 0; i < 100000; i++) {
        //     if (typeof variable === 'object' && variable !== null && !Array.isArray(variable) && Object.keys(variable)?.length) {
        //     }
        // }
        // console.timeEnd('string');
        expect(true).toBeTruthy();
    });

});
