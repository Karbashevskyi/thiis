import {is} from '../../dist';

describe('Mix', () => {

    // it('is.object.empty.null({})', () => {
    //     // typeof {} === 'object' && Object.keys({}).len === 0 && {} === null
    //     expect(is.object.empty.null({})).toBe(false);
    // });

    it('is.object.empty.or.null({})', () => {
        // typeof {} === 'object' && (Object.keys({}).len === 0 || {} === null)
        expect(is.object.empty.or.null({})).toBe(true);
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
