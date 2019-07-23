'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(str) {
	return str
		.split('')
		.map(function(x,i,self) {
			let isUpper = (i === 0 || self[i - 1].match(/\s/));
			return (isUpper ? x.toUpperCase() : x.toLowerCase());
		})
		.join('');
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase(''), '');
assert.strictEqual(jadenCase('test'), 'Test');
assert.strictEqual(jadenCase('TEST'), 'Test');
assert.strictEqual(jadenCase('testing HARDER'), 'Testing Harder');
assert.strictEqual(jadenCase('Multiple  spaces'), 'Multiple  Spaces');
assert.strictEqual(jadenCase('\tHandle\nother\fseparators\vand\rkeep them\n'), '\tHandle\nOther\fSeparators\vAnd\rKeep Them\n');
assert.strictEqual(jadenCase('That\'S_Just-One.Word'), 'That\'s_just-one.word');
assert.strictEqual(jadenCase('$Words *Starting £With +Non-Alpha'), '$words *starting £with +non-alpha');
assert.strictEqual(jadenCase('You must write your own tests'), 'You Must Write Your Own Tests');
// End of tests */
