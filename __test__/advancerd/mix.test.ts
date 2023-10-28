import {is} from '../../dist';

describe('Mix', () => {

    // it('is.object.empty.null({})', () => {
    //     // typeof {} === 'object' && Object.keys({}).len === 0 && {} === null
    //     expect(is.object.empty.null({})).toBe(false);
    // });

    // it('is.object.empty.or.null({})', () => {
    //     // typeof {} === 'object' && (Object.keys({}).len === 0 || {} === null)
    //     expect(is.object.empty.or.null({})).toBe(true);
    // });

    it('is.object_empty_or_null({})', () => {
        // console.time('object_empty_or_null');
        // const a = {};
        // for (let i = 0; i < 100_0000; i++) {
        //     // @ts-ignore
        //     if (is.object_empty_or_null(a)) {
        //
        //     }
        // }
        // console.timeEnd('object_empty_or_null');
        // console.time('native_object_empty_or_null');
        // for (let i = 0; i < 100_0000; i++) {
        //     // @ts-ignore
        //     if (typeof a === 'object' && (Object.keys(a).length === 0 || a === null)) {
        //
        //     }
        // }
        // console.timeEnd('native_object_empty_or_null');
        expect(is.object_empty_or_null({})).toBe(true);
    });

    // it('is.object.not.empty.null({})', () => {
    //     // typeof {} === 'object' && (Object.keys({}).len !== 0 && {} !== null)
    //     expect(is.object.not.empty.null({})).toBe(false);
    // });

    // it('is.object.not.empty.or.null({})', () => {
    //     // typeof {} === 'object' && (Object.keys({}).len !== 0 || {} !== null)
    //     // typeof {} === 'object' && !(Object.keys({}).len === 0 || {} === null)
    //     expect(is.object.not.empty.or.null({})).toBe(true);
    // });


});
