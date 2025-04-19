/* 
-write a function that returns the product of two numbers, two arguments 
-write a function that returns the quotient of two numbers 
-write a function that returns the exponential value of the first number to the power of the second number
-write a function that returns true if a value is positive and false if it is negative
-write a function that returns the current date , Date class
*/

function multiplyingTwoNumbers(numberOne, numberTwo) {
	const result = numberOne * numberTwo;
	return result;
}

function dividingTwoNumbers(numberOne, numberTwo) {
	const result = numberOne / numberTwo;
	return result;
}

function exponentialNumbers(numberOne, numberTwo) {
	const result = numberOne ** numberTwo;
	return result;
}

function positiveOrNegative(number) {
	if (number >= 0) {
		return true;
	} else if (number <= 0) {
		return false;
	}
}

function whatIsTheDate() {
	const today = new Date();
	return today;
}

// const final = multiplyingTwoNumbers (3,4)
// console.log(final)

// const answer= dividingTwoNumbers (12,4)
// console.log(answer)

// const end= exponentialNumbers (2,4)
// console.log(end)

// const input = positiveOrNegative(0)
// console.log (input)

// whatIsTheDate();
