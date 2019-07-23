'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

function cutFirst(str) {
	return (str.slice(2));
}

function cutLast(str) {
	return (str.slice(0, -2));
}

function cutFirstLast(str) {
	return (cutFirst(cutLast(str)));
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function', 'Should be a function');
assert.strictEqual(typeof cutLast, 'function', 'Should be a function');
assert.strictEqual(typeof cutFirstLast, 'function', 'Should be a function');
assert.strictEqual(cutFirst(""), '', 'Should cut empty strings');
assert.strictEqual(cutLast(""), '', 'Should cut empty strings');
assert.strictEqual(cutFirstLast(""), '', 'Should cut empty strings');
assert.strictEqual(cutFirst("a"), '', 'Should cut 1 char strings');
assert.strictEqual(cutLast("a"), '', 'Should cut 1 char strings');
assert.strictEqual(cutFirstLast("a"), '', 'Should cut 1 char strings');
assert.strictEqual(cutFirst("abc"), 'c', 'Should cut 3 chars strings');
assert.strictEqual(cutLast("abc"), 'a', 'Should cut 3 chars strings');
assert.strictEqual(cutFirstLast("abc"), '', 'Should cut 3 chars strings');
;
assert.strictEqual(cutFirst("abcdef"), 'cdef', "Should cut \"abcdef\"");
assert.strictEqual(cutLast("abcdef"), 'abcd', "Should cut \"abcdef\"");
assert.strictEqual(cutFirstLast("abcdef"), 'cd', "Should cut \"abcdef\"");
// End of tests */
