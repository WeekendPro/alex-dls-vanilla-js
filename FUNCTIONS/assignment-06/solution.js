/*
## INSTRUCTIONS

Complete the tasks below. 
Use node to run the tests in the test file found in this directory.

## TASKS

- Update `getNumbersInIncreasingOrderRange` with a function that takes an array of two numbers (a range) and returns an array of numbers from the start to the end (inclusive). The numbers should be in increasing order. The input array can be in any order.
- Update `getNumbersInDecreasingOrderRange` with a function that takes an array of two numbers (a range) and returns an array of numbers from the start to the end (inclusive). The numbers should be in decreasing order. The input array can be in any order.
- Update `getNumbersInGivenOrderRange` with a function that takes an array of two numbers (a range) and returns an array of numbers from the start to the end (inclusive). The numbers should be in the order they are provided. The input array can be in any order.
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

const getNumbersInIncreasingOrderRange = (range) => {
	const start = Math.min(range[0], range[1]);
	const end = Math.max(range[0], range[1]);
	const result = [];

	for (let i = start; i <= end; i++) {
		result.push(i);
	}
	return result;
};
const getNumbersInDecreasingOrderRange = (range) => {
	const start = Math.max(range[0], range[1]);
	const end = Math.min(range[0], range[1]);
	const result = [];

	for (let i = start; i >= end; i--) {
		result.push(i);
	}
	return result;
};
const getNumbersInGivenOrderRange = (range) => {
	const start = range[0];
	const end = range[1];
	const result = [];

	if (start <= end) {
		for (let i = start; i <= end; i++) {
			result.push(i);
		}
	} else {
		for (let i = start; i >= end; i--) {
			result.push(i);
		}
	}
	return result;
};
const getFirstNEvenPositiveNumbers = (limit) => {
	const result = [];
	for (let i = 1; i < limit; i++) {
		result.push(i*2);
	}
	return result;
};
const isLeapYear = (year) => {
	if (year % 4 !== 0) {
		return false;
	} else if (year % 100 !== 0) {
		return true;
	} else if (year % 400 === 0) {
		return true;
	} else {
		return false;
	}
};
const convertCelsiusToFahrenheit = (celsius) => {
	return (celsius * 9) / 5 + 32;
};
const convertFahrenheitToCelsius = (fahrenheit) => {
	return ((fahrenheit - 32) * 5) / 9;
};
const formatDollars = (cents) => {
	let dollars = cents / 100
	if (dollars % 1 === 0) {
		return `$${dollars.toFixed(0)}`;
	} else {
		return `$${dollars.toFixed(2)}`;
	}

};
const getGrade = (score) => {
	if (score >= 94 && score <= 100) {
    return 'A';
  } else if (score >= 90) {
    return 'A-';
  } else if (score >= 87) {
    return 'B+';
  } else if (score >= 84) {
    return 'B';
  } else if (score >= 74) {
    return 'C';
  } else if (score >= 70) {
    return 'C-';
  } else if (score >= 67) {
    return 'D+';
  } else if (score >= 64) {
    return 'D';
  } else if (score >= 60) {
    return 'D-';
  } else {
    return 'F';
  }
};
const canVote = (age) => {
	return age >= 18
};
const isInteger = (number) => {
	return typeof number === 'number' && number % 1 === 0
};
const rollDie = () => {
	return Math.floor(Math.random() * 6) + 1
};
const rollDice = () => {
	let die1 = Math.floor(Math.random() * 6) + 1
	let die2 = Math.floor(Math.random() * 6) + 1
	return die1 + die2
}

// ------------------------------- //
// Don't edit code below this line //
// ------------------------------- //

let solution = {};

try {
	solution = {
		getNumbersInIncreasingOrderRange,
		getNumbersInDecreasingOrderRange,
		getNumbersInGivenOrderRange,
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
