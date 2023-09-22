const is = require('./is/index.js');
const isNew = require('./is-new/is.js');
const thiis = require('../dist');
const is_js = require('./is_js');
const packageIs = {is};

const data = {a: 1};

console.time('thiis.is.object.not.empty');
for (let i = 0; i < 100_000; i++) {
    if (thiis.is.object.not.empty(data)) {

    }
}
console.timeEnd('thiis.is.object.not.empty');

console.time('is_js.is.object.not.empty');
for (let i = 0; i < 100_000; i++) {
    if (is_js.object(data) && is_js.not.empty(data)) {

    }
}
console.timeEnd('is_js.is.object.not.empty');

const isObjectNotEmpty = (target) => packageIs.is.object(target) && !packageIs.is.empty(target);
console.time('packageIs.is.object.not.empty');
for (let i = 0; i < 100_000; i++) {
    if (isObjectNotEmpty(data)) {

    }
}
console.timeEnd('packageIs.is.object.not.empty');

console.time('is.object.not.empty');
for (let i = 0; i < 100_000; i++) {
    if (isNew.object.not.empty(data)) {

    }
}
console.timeEnd('is.object.not.empty');
function emptyObject(target) {
    return Object.keys(target).length
    // for (const key in target) {
    //     if (target.hasOwnProperty(key)) {
    //         return false;
    //     }
    // }
    // return true;
}
console.time('NATIVE is.object.not.empty');
for (let i = 0; i < 100_000; i++) {
    if (
        Object.prototype.toString.call(data) === '[object Object]'
        // && emptyObject(data)
        && Object.keys(data).length
    ) {

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
