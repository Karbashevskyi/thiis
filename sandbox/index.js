const is = require('./is/is.js');
const thiis = require('../dist');
const is_js = require('./is_js');

console.time('thiis.is.object.not.empty');
for (let i = 0; i < 100_000; i++) {
    if (thiis.is.object.not.empty({a: 1})) {

    }
}
console.timeEnd('thiis.is.object.not.empty');

console.time('is_js.is.object.not.empty');
for (let i = 0; i < 100_000; i++) {
    if (is_js.object({a: 1}) && is_js.not.empty({a: 1})) {

    }
}
console.timeEnd('is_js.is.object.not.empty');

console.time('is.object.not.empty');
for (let i = 0; i < 100_000; i++) {
    if (is.object.not.empty({a: 1})) {

    }
}
console.timeEnd('is.object.not.empty');

console.time('NATIVE is.object.not.empty');
for (let i = 0; i < 100_000; i++) {
    if (typeof {a: 1} === 'object' && {a: 1} !== null && !Array.isArray({a: 1}) && Object.keys({a: 1})?.length) {

    }
}
console.timeEnd('NATIVE is.object.not.empty');


// console.time('is_js.is.string.empty');
// for (let i = 0; i < 100_000; i++) {
//     if (is_js.string('Hello world') && is_js.empty('Hello world')) {
//
//     }
// }
// console.timeEnd('is_js.is.string.empty');
//
// console.time('NEW Engine is.string.empty');
// for (let i = 0; i < 100_000; i++) {
//     if (is.string.empty('Hello world')) {
//
//     }
// }
// console.timeEnd('NEW Engine is.string.empty');

// console.time('NEW Engine is.object.not.empty ONE TIME');
//
// if (is.object.not.empty({a: 1})) {
//
// }
// console.timeEnd('NEW Engine is.object.not.empty ONE TIME');

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
