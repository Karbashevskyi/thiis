const methods = {};

function STRING(target) {
    return typeof target === 'string';
}

STRING.originalName = 'string';
// methods[STRING.originalName] = STRING;

function EMPTY(target) {
    return target[0] === undefined;
}

EMPTY.originalName = 'empty';
// methods[EMPTY.originalName] = EMPTY;

const handler = {
    // target: object, prop: string, receiver: proxy
    get: (target, prop, receiver) => {
        console.log(this, target, prop, receiver);
        this.count = (this.count ?? 0) + 1;
        methods[prop].test = this.count;
        return STRING;
        // return new Proxy(methods[prop], {
        //     get: handler.get,
        // });
    },
    apply(target, thisArg, argArray) {
        console.log('this', this);
        console.log()
        console.log('target', target);
        console.log()
        console.log('thisArg', thisArg);
        console.log()
        console.log('argArray', argArray);
        return true;
    }
};
const is = new Proxy(methods, handler);
is[EMPTY.originalName] = EMPTY;
is[STRING.originalName] = STRING;

// console.log(is.string(''));
console.log(is.string.empty(''));
console.log(is);

// console.time('string');
// for (let i = 0; i < 100_000; i++) {
//     if (is.string('')) {
//
//     }
// }
// console.timeEnd('string');
