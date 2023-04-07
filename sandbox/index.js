const is = require('./is');
// const {is: thiis} = require('../dist');
const is_js = require('./is_js');


// console.time('thiis.object.not.empty');
// for (let i = 0; i < 100_000; i++) {
//     if (thiis.object.not.empty({a: 1})) {
//
//     }
// }
// console.timeEnd('thiis.object.not.empty');

console.time('is_js.is.object.not.empty');
for (let i = 0; i < 100_000; i++) {
    if (is_js.object({a: 1}) && is_js.not.empty({a: 1})) {

    }
}
console.timeEnd('is_js.is.object.not.empty');

console.time('NEW Engine is.object.not.empty');
for (let i = 0; i < 100_000; i++) {
    if (is.object.not.empty({a: 1})) {

    }
}
console.timeEnd('NEW Engine is.object.not.empty');

console.log(`
|
|
|
`)

const used = process.memoryUsage();
const {heapUsed} = used;
console.log(`The script uses approximately ${Math.round((heapUsed/ 1024 / 1024) * 100) / 100} MB`);
for (let key in used) {
    console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}


// console.log(is.object(''));
// console.log(is.empty({a: 1}));
// console.log(is.not.empty({}));
// console.log(is.object.not.empty([1]));


// console.log('1: ', is.object())
// console.log('2: ', is.not.object())
// console.log('3: ', is.object.not.empty({a:1}))
// console.log('4: ', is.object.empty([]))
// TODO add .or. method
// console.log('5: ', is.object.or.string())
// console.log('6: ', is.not.object.or.string())
// console.log('7: ', is.object.not.empty.or.null({a: 1}))
// console.log('8: ', is.null.or.undefined.or.empty())
// console.log('9: ', is.object.or.string.not.empty())

//
