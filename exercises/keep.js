'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

function keepFirst(str) {
	return (str.slice(0, 2));
}

function keepLast(str) {
	return (str.slice(-2));
}

function keepFirstLast(str) {
	return (str.slice(2, 4));
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(keepFirst('I won\'t'), 'I ');
assert.strictEqual(keepLast('bother testing'), 'ng');
assert.strictEqual(keepFirstLast('when you don\'t'), 'en');
// End of tests */
