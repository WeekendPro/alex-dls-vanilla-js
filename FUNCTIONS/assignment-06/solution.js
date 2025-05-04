/*
## INSTRUCTIONS

Complete the tasks below. 
Use node to run the tests in the test file found in this directory.

## TASKS

- Update `getNumbersInIncreasingOrderRange` with a function that takes an array of two numbers (a range) and returns an array of numbers from the start to the end (inclusive). The numbers should be in increasing order. The input array can be in any order.
- Update `getNumbersInDecreasingOrderRange` with a function that takes an array of two numbers (a range) and returns an array of numbers from the start to the end (inclusive). The numbers should be in decreasing order. The input array can be in any order.
- Update `getNumbersInIncomingOrderRange` with a function that takes an array of two numbers (a range) and returns an array of numbers from the start to the end (inclusive). The numbers should be in the order they are provided. The input array can be in any order.
- Update `getFirstNEvenPositiveNumbers` with a function that takes a number (limit) and returns an array of the first N even numbers.
- Update `isLeapYear` with a function that checks if a year (number) is a leap year (divisible by 4, but not by 100 unless also divisible by 400).
- Update `convertCelsiusToFahrenheit` with a function that takes a temperature in Celsius and converts it to Fahrenheit. Formula: F = C * 9/5 + 32
- Update `convertFahrenheitToCelsius` with a function that takes a temperature in Fahrenheit and converts it to Celsius. Formula: C = (F - 32) * 5/9
- Update `formatDollars` with a function that takes a number of cents and returns a string formatted as dollars and cents (e.g., 123 -> "$1.23").
- Update `getGrade` with a function that takes a score (number) and returns a grade ('A', 'B', 'C', 'D', 'F') based on these thresholds:
    94 – 100   =>	 A
    90 – 93.9  =>	 A-
    87 – 89.9  =>	 B+
    84 – 86.9  =>	 B
    74 – 83.9  =>	 C
    70 – 73.9  =>	 C-
    67 – 69.9  =>	 D+
    64 – 66.9  =>	 D
    60 – 63.9  =>	 D-
    0  – 59.9  =>	 F

- Update `canVote` with a function that takes an age and returns true if the age is 18 or older (can vote), false otherwise.
- Update `isInteger` with a function that takes a number and returns true if it's an integer, false otherwise. (Hint: number % 1 === 0)
- Update `rollDie` with a function that generates a random number between 1 and 6 (inclusive). (Use Math.random() and Math.floor())
- Update `rollDice` with a function that simulates rolling two standard 6-sided dice and returns the sum of the results.
*/

// ---------------------------- //
// Fix the code below this line //
// ---------------------------- //

const getNumbersInIncreasingOrderRange = (range) => {};
const getNumbersInDecreasingOrderRange = (range) => {};
const getNumbersInIncomingOrderRange = (range) => {};
const getFirstNEvenPositiveNumbers = (limit) => {};
const isLeapYear = (year) => {};
const convertCelsiusToFahrenheit = (celsius) => {};
const convertFahrenheitToCelsius = (fahrenheit) => {};
const formatDollars = (cents) => {};
const getGrade = (score) => {};
const canVote = (age) => {};
const isInteger = () => {};
const rollDie = () => {};
const rollDice = () => {};

// ------------------------------- //
// Don't edit code below this line //
// ------------------------------- //

let solution = {};

try {
	solution = {
		getNumbersInIncreasingOrderRange,
		getNumbersInDecreasingOrderRange,
		getNumbersInIncomingOrderRange,
		getFirstNEvenPositiveNumbers,
		isLeapYear,
		convertCelsiusToFahrenheit,
		convertFahrenheitToCelsius,
		formatDollars,
		getGrade,
		canVote,
		isInteger,
		rollDie,
		rollDice,
	};
} catch (error) {
	console.error(error);
}

export default solution;
