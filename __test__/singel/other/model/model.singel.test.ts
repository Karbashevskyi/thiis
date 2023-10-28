import {is} from '../../../../dist';
import {Cart, dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('Model singel', () => {

    it.each(dataForGoodTesting)('is.Person: Should true for $value', ({value}) => {
        expect(is.Person(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.Person: Should false for $value', ({value}) => {
        expect(is.Person(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_Person: Should false for $value', ({value}) => {
        expect(is.not_Person(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_Person: Should true for $value', ({value}) => {
        expect(is.not_Person(value)).toBe(true);
    });

    it('is.Cart(new Cart())', () => {
        expect(is.Cart(new Cart())).toBe(true);
    });

    it('is.Cart_empty(new Cart())', () => {
        expect(is.Cart_empty(new Cart())).toBe(true);
    });

    it('is.Cart_not_empty(new Cart())', () => {
        const cart = new Cart();
        cart.size = 1;
        // @ts-ignore
        // TODO add to interface .not. for Model
        expect(is.Cart_not_empty(cart)).toBe(true);
    });

});
