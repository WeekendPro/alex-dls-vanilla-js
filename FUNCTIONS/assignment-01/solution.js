/* 
## INSTRUCTIONS

Complete the tasks below. 
Use node to run the tests in the test file found in this directory.

## TASKS

- Update `isPositive` with a function that returns true if a number is positive, false otherwise.
- Update `isNegative` with a function that returns true if a number is negative, false otherwise.
- Update `isZero` with a function that returns true if a number is zero, false otherwise.
- Update `isEven` with a function that returns true if a number is even, false otherwise.
- Update `isOdd` with a function that returns true if a number is odd, false otherwise.
- Update `getLarger` with a function that returns the larger of two numbers. If the numbers are equal, return either one.
- Update `getSmaller` with a function that returns the smaller of two numbers. If the numbers are equal, return either one.
- Update `isEqual` with a function that returns true if two numbers are equal (use ===).
- Update `isNotEqual` with a function that returns true if two numbers are not equal (use !==).
- Update `isGreaterThan` with a function that returns true if the first number is greater than the second.
- Update `isLessThan` with a function that returns true if the first number is less than the second.
- Update `isGreaterThanOrEqual` with a function that returns true if the first number is greater than or equal to the second.
- Update `isLessThanOrEqual` with a function that returns true if the first number is less than or equal to the second.
*/

// ---------------------------- //
// Fix the code below this line //
// ---------------------------- //

const isPositive = (number) => number > 0;
const isNegative = (number) => number < 0;
const isZero = (number) => number === 0;
const isEven = (number) => number % 2 === 0;
const isOdd = (number) => Number.isInteger(number) && number % 2 !== 0;
const getLarger = (numberOne, numberTwo) => {
	if (numberOne > numberTwo) {
		return numberOne;
	} else if (numberTwo > numberOne) {
		return numberTwo;
	} else {
		return numberOne;
	}
};
const getSmaller = (numberOne, numberTwo) => {
	if (numberOne < numberTwo) {
		return numberOne;
	} else if (numberTwo < numberOne) {
		return numberTwo;
	} else {
		return numberOne;
	}
};
const isEqual = (numberOne, numberTwo) => numberOne === numberTwo;
const isNotEqual = (numberOne, numberTwo) => numberOne !== numberTwo;
const isGreaterThan = (numberOne, numberTwo) => numberOne > numberTwo;
const isLessThan = (numberOne, numberTwo) => numberOne < numberTwo;
const isGreaterThanOrEqual = (numberOne, numberTwo) => numberOne >= numberTwo;
const isLessThanOrEqual = (numberOne, numberTwo) => numberOne <= numberTwo;

// ------------------------------- //
// Don't edit code below this line //
// ------------------------------- //

let solution = {};

try {
	solution = {
		isPositive,
		isNegative,
		isZero,
		isEven,
		isOdd,
		getLarger,
		getSmaller,
		isEqual,
		isNotEqual,
		isGreaterThan,
		isLessThan,
		isGreaterThanOrEqual,
		isLessThanOrEqual,
	};
} catch (error) {
	console.error(error);
}

export default solution;
