'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :

function divmod(a, b) {
	let r = 0;
	let a2 = (a < 0) ? -a : a;
	let b2 = (b < 0) ? -b : b;
	let rNeg = (a < 0 ^ b < 0);
	let bNeg = (b < 0);
	while (a2 >= b2) {
		++r;
		a2 -= b2;
	}
//	console.log(`divmod: ${a} / ${b} = ${(rNeg ? -r : r)} + ${(bNeg ? -a2 : a2)}`);
	return ([(rNeg ? -r : r), (bNeg ? -a2 : a2)]);
}

function divide(a, b) {
	let rNeg = (a < 0 ^ b < 0);
	let a2 = (a < 0) ? -a : a;
	let b2 = (b < 0) ? -b : b;
	let [r, remainder] = divmod(a2, b2);
	if (remainder > 0) {
		let twoR = remainder + remainder;
		remainder = twoR + twoR;
		remainder += remainder + twoR;
		let decimals = divide(remainder, b2);
		r = "" + r + "." + ("" + decimals).replace('.', '');
	}
//	console.log(`divide: ${a} / ${b} = ${(rNeg ? -r : +r)}`);
	return (rNeg ? -r : +r);
}

function multiply(a, b) {
	let r = 0;
	let bNeg = (b < 0 || b == -0);
	let b2 = bNeg ? -b : b;
	let a2 = a;
	while (b2 > 0) {
		while (b2 >= 1) {
			r += a2;
			--b2;
		}
		let twoB2 = b2 + b2;
		b2 = twoB2 + twoB2;
		b2 += b2 + twoB2;
		a2 = divide(a2, 10);
	}
	return (bNeg && a !== 0 ? -r : r);
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
assert.strictEqual(Math.round(multiply(-22.5, -123.97864132), 5), Math.round(-22.5 * -123.97864132, 5));
assert.strictEqual(Math.round(multiply(-0.00015, 123), 5), Math.round(-0.00015 * 123, 5))
assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
// End of tests */
