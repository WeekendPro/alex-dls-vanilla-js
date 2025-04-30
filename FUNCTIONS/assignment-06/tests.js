import solution from './solution.js';
import { print } from '../utils.js';

function runTests() {
	const {
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
	} = solution;

	const getNumbersInIncreasingOrderRangeTestCases = [
		{
			input: [1, 10],
			expectedOutput: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			input: [10, 1],
			expectedOutput: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			input: [5, 5],
			expectedOutput: [5],
		},
		{
			input: [0, 0],
			expectedOutput: [0],
		},
		{
			input: [-10, -1],
			expectedOutput: [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1],
		},
		{
			input: [10, -10],
			expectedOutput: [
				-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
				10,
			],
		},
		{
			input: [10, -10],
			expectedOutput: [
				-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
				10,
			],
		},
	];

	console.log('\n\x1b[1m   Tests for `getNumbersInRange` \n\x1b[0m');

	for (const testCase of getNumbersInIncreasingOrderRangeTestCases) {
		const { input, expectedOutput } = testCase;
		const result = getNumbersInIncreasingOrderRange(input);
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			isCorrect =
				result.length === expectedOutput.length &&
				result.every((value, index) => value === expectedOutput[index]);
		} else {
			isCorrect = result === expectedOutput;
		}
		const base = `called "getNumbersInIncreasingOrderRange" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

	const getNumbersInDecreasingOrderRangeTestCases = [
		{
			input: [1, 10],
			expectedOutput: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
		},
		{
			input: [10, 1],
			expectedOutput: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
		},
		{
			input: [5, 5],
			expectedOutput: [5],
		},
		{
			input: [0, 0],
			expectedOutput: [0],
		},
		{
			input: [-10, -1],
			expectedOutput: [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10],
		},
		{
			input: [10, -10],
			expectedOutput: [
				10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9,
				-10,
			],
		},
	];

	console.log(
		'\n\x1b[1m   Tests for `getNumbersInDecreasingOrderRange` \n\x1b[0m'
	);

	for (const testCase of getNumbersInDecreasingOrderRangeTestCases) {
		const { input, expectedOutput } = testCase;
		const result = getNumbersInDecreasingOrderRange(input);
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			isCorrect =
				result.length === expectedOutput.length &&
				result.every((value, index) => value === expectedOutput[index]);
		} else {
			isCorrect = result === expectedOutput;
		}
		const base = `called "getNumbersInDecreasingOrderRange" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

	const getNumbersInGivenOrderRangeTestCases = [
		{
			input: [1, 10],
			expectedOutput: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			input: [10, 1],
			expectedOutput: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
		},
		{
			input: [5, 5],
			expectedOutput: [5],
		},
		{
			input: [0, 0],
			expectedOutput: [0],
		},
		{
			input: [-10, -1],
			expectedOutput: [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1],
		},
		{
			input: [10, -10],
			expectedOutput: [
				10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9,
				-10,
			],
		},
	];

	console.log('\n\x1b[1m   Tests for `getNumbersInGivenOrderRange` \n\x1b[0m');

	for (const testCase of getNumbersInGivenOrderRangeTestCases) {
		const { input, expectedOutput } = testCase;
		const result = getNumbersInGivenOrderRange(input);
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			isCorrect =
				result.length === expectedOutput.length &&
				result.every((value, index) => value === expectedOutput[index]);
		} else {
			isCorrect = result === expectedOutput;
		}
		const base = `called "getNumbersInGivenOrderRange" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

	const getFirstNEvenPositiveNumbersTestCases = [
		{
			input: 10,
			expectedOutput: [2, 4, 6, 8, 10, 12, 14, 16, 18],
		},
		{
			input: 5,
			expectedOutput: [2, 4, 6, 8],
		},
		{
			input: 0,
			expectedOutput: [],
		},
		{
			input: -1,
			expectedOutput: [],
		},
		{
			input: 15,
			expectedOutput: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
		},
	];

	console.log('\n\x1b[1m   Tests for `getFirstNEvenPositiveNumbers` \n\x1b[0m');

	for (const testCase of getFirstNEvenPositiveNumbersTestCases) {
		const { input, expectedOutput } = testCase;
		const result = getFirstNEvenPositiveNumbers(input);
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			isCorrect =
				result.length === expectedOutput.length &&
				result.every((value, index) => value === expectedOutput[index]);
		} else {
			isCorrect = result === expectedOutput;
		}
		const base = `called "getFirstNEvenPositiveNumbers" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

	const isLeapYearTestCases = [
		{
			input: 2020,
			expectedOutput: true,
		},
		{
			input: 2021,
			expectedOutput: false,
		},
		{
			input: 2000,
			expectedOutput: true,
		},
		{
			input: 1900,
			expectedOutput: false,
		},
		{
			input: 1963,
			expectedOutput: false,
		},
	];

	console.log('\n\x1b[1m   Tests for `isLeapYear` \n\x1b[0m');

	for (const testCase of isLeapYearTestCases) {
		const { input, expectedOutput } = testCase;
		const result = isLeapYear(input);
		const isCorrect = result === expectedOutput;
		const base = `called "isLeapYear" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

	const convertCelsiusToFahrenheitTestCases = [
		{
			input: 0,
			expectedOutput: 32,
		},
		{
			input: 100,
			expectedOutput: 212,
		},
		{
			input: -40,
			expectedOutput: -40,
		},
	];

	console.log('\n\x1b[1m   Tests for `convertCelsiusToFahrenheit` \n\x1b[0m');

	for (const testCase of convertCelsiusToFahrenheitTestCases) {
		const { input, expectedOutput } = testCase;
		const result = convertCelsiusToFahrenheit(input);
		const isCorrect = result === expectedOutput;
		const base = `called "convertCelsiusToFahrenheit" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

	const convertFahrenheitToCelsiusTestCases = [
		{
			input: 32,
			expectedOutput: 0,
		},
		{
			input: 212,
			expectedOutput: 100,
		},
		{
			input: -40,
			expectedOutput: -40,
		},
	];

	console.log('\n\x1b[1m   Tests for `convertFahrenheitToCelsius` \n\x1b[0m');

	for (const testCase of convertFahrenheitToCelsiusTestCases) {
		const { input, expectedOutput } = testCase;
		const result = convertFahrenheitToCelsius(input);
		const isCorrect = result === expectedOutput;
		const base = `called "convertFahrenheitToCelsius" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

	const formatDollarsTestCases = [
		{
			input: 100,
			expectedOutput: '$1',
		},
		{
			input: 1000,
			expectedOutput: '$10',
		},
		{
			input: 10000,
			expectedOutput: '$100',
		},
		{
			input: 100000,
			expectedOutput: '$1000',
		},
		{
			input: 49101,
			expectedOutput: '$491.01',
		},
		{
			input: 63333,
			expectedOutput: '$633.33',
		},
	];

	console.log('\n\x1b[1m   Tests for `formatDollars` \n\x1b[0m');

	for (const testCase of formatDollarsTestCases) {
		const { input, expectedOutput } = testCase;
		const result = formatDollars(input);
		const isCorrect = result === expectedOutput;
		const base = `called "formatDollars" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

	const getGradeTestCases = [
		{
			input: 95,
			expectedOutput: 'A',
		},
		{
			input: 90,
			expectedOutput: 'A-',
		},
		{
			input: 87,
			expectedOutput: 'B+',
		},
		{
			input: 84,
			expectedOutput: 'B',
		},
		{
			input: 74,
			expectedOutput: 'C',
		},
		{
			input: 70,
			expectedOutput: 'C-',
		},
		{
			input: 67,
			expectedOutput: 'D+',
		},
		{
			input: 64,
			expectedOutput: 'D',
		},
		{
			input: 60,
			expectedOutput: 'D-',
		},
		{
			input: 59,
			expectedOutput: 'F',
		},
	];

	console.log('\n\x1b[1m   Tests for `getGrade` \n\x1b[0m');

	for (const testCase of getGradeTestCases) {
		const { input, expectedOutput } = testCase;
		const result = getGrade(input);
		const isCorrect = result === expectedOutput;
		const base = `called "getGrade" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

	const canVoteTestCases = [
		{
			input: 18,
			expectedOutput: true,
		},
		{
			input: 17,
			expectedOutput: false,
		},
		{
			input: 16,
			expectedOutput: false,
		},
		{
			input: 21,
			expectedOutput: true,
		},
	];

	console.log('\n\x1b[1m   Tests for `canVote` \n\x1b[0m');

	for (const testCase of canVoteTestCases) {
		const { input, expectedOutput } = testCase;
		const result = canVote(input);
		const isCorrect = result === expectedOutput;
		const base = `called "canVote" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

	const isIntegerTestCases = [
		{
			input: 1,
			expectedOutput: true,
		},
		{
			input: 1.5,
			expectedOutput: false,
		},
		{
			input: -1,
			expectedOutput: true,
		},
		{
			input: -1.5,
			expectedOutput: false,
		},
		{
			input: '1',
			expectedOutput: false,
		},
		{
			input: false,
			expectedOutput: false,
		},
		{
			input: null,
			expectedOutput: false,
		},
		{
			input: [1],
			expectedOutput: false,
		},
	];

	console.log('\n\x1b[1m   Tests for `isInteger` \n\x1b[0m');

	for (const testCase of isIntegerTestCases) {
		const { input, expectedOutput } = testCase;
		const result = isInteger(input);
		const isCorrect = result === expectedOutput;
		const base = `called "isInteger" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

	console.log('\n\x1b[1m   Tests for `rollDie` \n\x1b[0m');

	for (let i = 0; i < 5; i++) {
		const result = rollDie();
		const expectedOutput = 'a number between 1 and 6';
		const isCorrect = result >= 1 && result <= 6;
		const base = `called "rollDie" and`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${expectedOutput} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

	console.log('\n\x1b[1m   Tests for `rollDice` \n\x1b[0m');

	for (let i = 0; i < 10; i++) {
		const result = rollDice();
		const expectedOutput = 'a number between 2 and 12';
		const isCorrect = result >= 2 && result <= 12;
		const base = `called "rollDice" and`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${expectedOutput} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}
}

runTests();
