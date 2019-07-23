'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

function yell(str) {
	return (str.toUpperCase());
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(yell('You must write your own tests'), 'YOU MUST WRITE YOUR OWN TESTS');
// End of tests */
