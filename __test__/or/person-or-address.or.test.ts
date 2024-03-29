import {is, RegisterInIs} from '../../dist';

@RegisterInIs({className: 'Person'})
class PersonModel {

}

@RegisterInIs({className: 'Man'})
class ManModel extends PersonModel {

}

@RegisterInIs({className: 'Address'})
class AddressModel {

}

@RegisterInIs()
class AnotherModel {

}

describe('Person_or_Address or', () => {

    const dataForGoodTesting: { value: any }[] = [
        {
            value: new PersonModel()
        },
        {
            value: new ManModel()
        },
        {
            value: new AddressModel()
        }
    ];

    const dataForBadTesting: { value: any }[] = [
        {
            value: new AnotherModel()
        },
        {
            value: undefined
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
            value: []
        },
        {
            value: null
        },
        {
            value: Symbol()
        },
        {
            value: NaN
        },
        {
            value: 'undefined'
        },
        {
            value: 'null'
        },
        {
            value: true
        },
        {
            value: BigInt(1)
        },
        {
            value: false
        },
        {
            value: 0
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
    ];

    it.each(dataForGoodTesting)('is.Person_or_Address: Should true for $value', ({value}) => {
        expect(is.Person_or_Address(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.Person_or_Address: Should false for $value', ({value}) => {
        expect(is.Person_or_Address(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not_Person_or_Address: Should false for $value', ({value}) => {
        expect(is.not_Person_or_Address(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not_Person_or_Address: Should true for $value', ({value}) => {
        expect(is.not_Person_or_Address(value)).toBe(true);
    });

});
