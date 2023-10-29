import {is} from '../../dist';

describe('Mix', () => {

    it('is.object_empty_null({})', () => {
        // typeof {} === 'object' && Object.keys({}).len === 0 && {} === null
        expect(is.object_empty_null({})).toBe(false);
    });

    it('is.object_empty_or_null({})', () => {
        // typeof {} === 'object' && (Object.keys({}).len === 0 || {} === null)
        expect(is.object_empty_or_null({})).toBe(true);
    });

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

    it('is.object_not_empty_null({})', () => {
        // typeof {} === 'object' && (Object.keys({}).len !== 0 && {} !== null)
        expect(is.object_not_empty_null({})).toBe(false);
    });

    it('is.object_not_empty_or_null({a: 1})', () => {
        // typeof {} === 'object' && (Object.keys({}).len !== 0 || {} !== null)
        // typeof {} === 'object' && !(Object.keys({}).len === 0 || {} === null)
        expect(is.object_not_empty_or_null({a: 1})).toBe(true);
    });


});
