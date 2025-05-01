import solution from './solution.js';
import { handleTestCases, printHeading, getPrintable } from '../utils.js';

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

	handleTestCases({
		tests: getNumbersInIncreasingOrderRangeTestCases,
		func: getNumbersInIncreasingOrderRange,
		params: ['input'],
		forceArrayOrder: true,
	});

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

	handleTestCases({
		tests: getNumbersInDecreasingOrderRangeTestCases,
		func: getNumbersInDecreasingOrderRange,
		params: ['input'],
		forceArrayOrder: true,
	});

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

	handleTestCases({
		tests: getNumbersInGivenOrderRangeTestCases,
		func: getNumbersInGivenOrderRange,
		params: ['input'],
		forceArrayOrder: true,
	});

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

	handleTestCases({
		tests: getFirstNEvenPositiveNumbersTestCases,
		func: getFirstNEvenPositiveNumbers,
		params: ['input'],
		forceArrayOrder: true,
	});

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

	handleTestCases({
		tests: isLeapYearTestCases,
		func: isLeapYear,
		params: ['input'],
	});

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

	handleTestCases({
		tests: convertCelsiusToFahrenheitTestCases,
		func: convertCelsiusToFahrenheit,
		params: ['input'],
	});

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

	handleTestCases({
		tests: convertFahrenheitToCelsiusTestCases,
		func: convertFahrenheitToCelsius,
		params: ['input'],
	});

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

	handleTestCases({
		tests: formatDollarsTestCases,
		func: formatDollars,
		params: ['input'],
	});

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

	handleTestCases({
		tests: getGradeTestCases,
		func: getGrade,
		params: ['input'],
	});

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

	handleTestCases({
		tests: canVoteTestCases,
		func: canVote,
		params: ['input'],
	});

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

	handleTestCases({
		tests: isIntegerTestCases,
		func: isInteger,
		params: ['input'],
	});

	printHeading(`Tests for "${rollDie.name}"`);

	for (let i = 0; i < 5; i++) {
		const result = rollDie();
		const expectedOutput = 'a number between 1 and 6';
		const isCorrect = result >= 1 && result <= 6;
		const base = `called "${rollDie.name}" and`;
		const pass = `✅ ${base} got ${getPrintable(result)}`;
		const fail = `❌ ${base} expected ${expectedOutput} but got ${getPrintable(result)}`;
		console.log(isCorrect ? pass : fail);
	}

	printHeading(`Tests for "${rollDice.name}"`);

	for (let i = 0; i < 10; i++) {
		const result = rollDice();
		const expectedOutput = 'a number between 2 and 12';
		const isCorrect = result >= 2 && result <= 12;
		const base = `called "${rollDice.name}" and`;
		const pass = `✅ ${base} got ${getPrintable(result)}`;
		const fail = `❌ ${base} expected ${expectedOutput} but got ${getPrintable(result)}`;
		console.log(isCorrect ? pass : fail);
	}
}

runTests();
