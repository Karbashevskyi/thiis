console.time('Initialization time fo new engine');
const is = require('./is');
console.timeEnd('Initialization time fo new engine');
/**
 * #1 #2
 */
// console.log('Case: #1 #2');
// console.log('is.not.object([]) = true: ', is.not.object([]));
// console.log('is.not.boolean.or.number(\'\') = true: ', is.not.boolean.or.number(''));
// console.log('is.not.object({}) = false: ', is.not.object({}));
// console.log('is.not.boolean.or.number(0) = false: ', is.not.boolean.or.number(0));
// console.log('');

/**
 * #3
 */
// console.log('Case: #3');
// console.log('true: ', is.object.empty({}));
// console.log('false: ', is.object.empty({a: 1}));
// console.log('true: ', is.string.empty(''));
// console.log('');

/**
 * #4 #5
 */
// console.log('Case: #4 #5');
// console.log('true: ', is.string.or.number(0));
// console.log('true: ', is.string.or.number(''));
// console.log('false: ', is.string.or.number(true));
// // console.log(is.string.or.number.or.boolean(false)); // Only if MAX_LEVEL_OF_OR is more than 1
// console.log('');

/**
 * #6 #7 #8
 */
console.log('Case: #6 #7 #8');
console.log('true: ', is.object.not.empty({a: 1}));
// console.log('false: ', is.object.not.empty.or.boolean(true));
// console.log('false: ', is.object.or.string.not.empty(''));
console.log('');


// const MAX_LEVEL = 25;
// let LAST_LEVEL = 0;
// let TOTAL = 0;
//
// function consoleRec(target, level = 1) {
//     // if (level === 2) {
//     //     if (target.originalName !== 'string') {
//     //         return;
//     //     }
//     //     console.log(' ');
//     // }
//     console.log('|', [].constructor(level).join('-'), target?.originalName ?? target.name);
//     TOTAL++;
//     if (level > LAST_LEVEL) {
//         LAST_LEVEL = level;
//     }
//     if (MAX_LEVEL >= level) {
//         Object.keys(target).forEach((k) => {
//             if (target[k] instanceof Function) {
//                 consoleRec(target[k], level + 1);
//             }
//         });
//     }
// }
//
// consoleRec(is);
// console.log('LAST_LEVEL: ', LAST_LEVEL, 'TOTAL: ', TOTAL);
