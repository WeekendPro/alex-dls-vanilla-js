/* 
## INSTRUCTIONS

Complete the tasks below. 
Use node to run the tests in the test file found in this directory.

## TASKS

- Update `getSum` with a function that returns the sum of two numbers. 
- Update `getDifference` with a function that returns the difference between two numbers. 
- Update `getProduct` with a function that returns the product of two numbers. 
- Update `getQuotient` with a function that returns the quotient of two numbers. 
- Update `getRemainder` with a function that returns the remainder of two numbers divided (modulo). 
- Update `getPower` with a function that returns the exponential value of the first number to the power of the second number. 
*/

// ---------------------------- //
// Fix the code below this line //
// ---------------------------- //

const getSum = (a, b) => {
	return a + b;
};
const getDifference = (c, d) => {
	return c - d;
};
const getProduct = (e, f) => {
	return e * f;
};
const getQuotient = (g, h) => {
	return g / h;
};
const getRemainder = (i, j) => {
	return i % j;
};
const getPower = (k, l) => {
	return k ** l;
};

// ------------------------------- //
// Don't edit code below this line //
// ------------------------------- //

let solution = {};

try {
	solution = {
		getSum,
		getDifference,
		getProduct,
		getQuotient,
		getRemainder,
		getPower,
	};
} catch (error) {
	console.error(error);
}

export default solution;
