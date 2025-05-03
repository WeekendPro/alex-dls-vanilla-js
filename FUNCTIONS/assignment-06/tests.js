import solution from './solution.js';
import { Tester } from '../../shared/tester.js';

// handleTestCases,
// printHeading,
// getPrintable,

function runTests() {
	const tester = new Tester();
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
			range: [1, 10],
			expectedOutput: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			range: [10, 1],
			expectedOutput: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			range: [5, 5],
			expectedOutput: [5],
		},
		{
			range: [0, 0],
			expectedOutput: [0],
		},
		{
			range: [-10, -1],
			expectedOutput: [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1],
		},
		{
			range: [10, -10],
			expectedOutput: [
				-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
				10,
			],
		},
		{
			range: [10, -10],
			expectedOutput: [
				-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
				10,
			],
		},
	];

	tester.handleTestCases({
		tests: getNumbersInIncreasingOrderRangeTestCases,
		func: getNumbersInIncreasingOrderRange,
		params: ['range'],
		forceArrayOrder: true,
		description: `${tester.printFunction(getNumbersInIncreasingOrderRange)} should return an array of numbers in increasing order using the provided ${tester.printParam('range')}.`,
	});

	const getNumbersInDecreasingOrderRangeTestCases = [
		{
			range: [1, 10],
			expectedOutput: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
		},
		{
			range: [10, 1],
			expectedOutput: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
		},
		{
			range: [5, 5],
			expectedOutput: [5],
		},
		{
			range: [0, 0],
			expectedOutput: [0],
		},
		{
			range: [-10, -1],
			expectedOutput: [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10],
		},
		{
			range: [10, -10],
			expectedOutput: [
				10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9,
				-10,
			],
		},
	];

	tester.handleTestCases({
		tests: getNumbersInDecreasingOrderRangeTestCases,
		func: getNumbersInDecreasingOrderRange,
		params: ['range'],
		forceArrayOrder: true,
		description: `${tester.printFunction(getNumbersInDecreasingOrderRange)} should return an array of numbers in decreasing order using the provided ${tester.printParam('range')}.`,
	});

	const getNumbersInGivenOrderRangeTestCases = [
		{
			range: [1, 10],
			expectedOutput: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			range: [10, 1],
			expectedOutput: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
		},
		{
			range: [5, 5],
			expectedOutput: [5],
		},
		{
			range: [0, 0],
			expectedOutput: [0],
		},
		{
			range: [-10, -1],
			expectedOutput: [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1],
		},
		{
			range: [10, -10],
			expectedOutput: [
				10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9,
				-10,
			],
		},
	];

	tester.handleTestCases({
		tests: getNumbersInGivenOrderRangeTestCases,
		func: getNumbersInGivenOrderRange,
		params: ['range'],
		forceArrayOrder: true,
		description: `${tester.printFunction(getNumbersInGivenOrderRange)} should return an array of numbers in the order they are provided using the provided ${tester.printParam('range')}.`,
	});

	const getFirstNEvenPositiveNumbersTestCases = [
		{
			limit: 10,
			expectedOutput: [2, 4, 6, 8, 10, 12, 14, 16, 18],
		},
		{
			limit: 5,
			expectedOutput: [2, 4, 6, 8],
		},
		{
			limit: 0,
			expectedOutput: [],
		},
		{
			limit: -1,
			expectedOutput: [],
		},
		{
			limit: 15,
			expectedOutput: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
		},
	];

	tester.handleTestCases({
		tests: getFirstNEvenPositiveNumbersTestCases,
		func: getFirstNEvenPositiveNumbers,
		params: ['limit'],
		forceArrayOrder: true,
		description: `${tester.printFunction(getFirstNEvenPositiveNumbers)} should return an array of the first N even numbers up to the provided ${tester.printParam('limit')}.`,
	});

	const isLeapYearTestCases = [
		{
			year: 2020,
			expectedOutput: true,
		},
		{
			year: 2021,
			expectedOutput: false,
		},
		{
			year: 2000,
			expectedOutput: true,
		},
		{
			year: 1900,
			expectedOutput: false,
		},
		{
			year: 1963,
			expectedOutput: false,
		},
	];

	tester.handleTestCases({
		tests: isLeapYearTestCases,
		func: isLeapYear,
		params: ['year'],
		description: `${tester.printFunction(isLeapYear)} should return ${tester.printBoolean(true)} if the provided ${tester.printParam('year')} is a leap year, otherwise ${tester.printBoolean(false)}.`,
	});

	const convertCelsiusToFahrenheitTestCases = [
		{
			celsius: 0,
			expectedOutput: 32,
		},
		{
			celsius: 100,
			expectedOutput: 212,
		},
		{
			celsius: -40,
			expectedOutput: -40,
		},
	];

	tester.handleTestCases({
		tests: convertCelsiusToFahrenheitTestCases,
		func: convertCelsiusToFahrenheit,
		params: ['celsius'],
		description: `${tester.printFunction(convertCelsiusToFahrenheit)} should return the ${tester.printParam('celsius')} converted to fahrenheit.`,
	});

	const convertFahrenheitToCelsiusTestCases = [
		{
			fahrenheit: 32,
			expectedOutput: 0,
		},
		{
			fahrenheit: 212,
			expectedOutput: 100,
		},
		{
			fahrenheit: -40,
			expectedOutput: -40,
		},
	];

	tester.handleTestCases({
		tests: convertFahrenheitToCelsiusTestCases,
		func: convertFahrenheitToCelsius,
		params: ['fahrenheit'],
		description: `${tester.printFunction(convertFahrenheitToCelsius)} should return the ${tester.printParam('fahrenheit')} converted to celsius.`,
	});

	const formatDollarsTestCases = [
		{
			cents: 100,
			expectedOutput: '$1',
		},
		{
			cents: 1000,
			expectedOutput: '$10',
		},
		{
			cents: 10000,
			expectedOutput: '$100',
		},
		{
			cents: 100000,
			expectedOutput: '$1000',
		},
		{
			cents: 49101,
			expectedOutput: '$491.01',
		},
		{
			cents: 63333,
			expectedOutput: '$633.33',
		},
	];

	tester.handleTestCases({
		tests: formatDollarsTestCases,
		func: formatDollars,
		params: ['cents'],
		description: `${tester.printFunction(formatDollars)} should return the ${tester.printParam('cents')} formatted as dollars and cents.`,
	});

	const getGradeTestCases = [
		{
			score: 95,
			expectedOutput: 'A',
		},
		{
			score: 90,
			expectedOutput: 'A-',
		},
		{
			score: 87,
			expectedOutput: 'B+',
		},
		{
			score: 84,
			expectedOutput: 'B',
		},
		{
			score: 74,
			expectedOutput: 'C',
		},
		{
			score: 70,
			expectedOutput: 'C-',
		},
		{
			score: 67,
			expectedOutput: 'D+',
		},
		{
			score: 64,
			expectedOutput: 'D',
		},
		{
			score: 60,
			expectedOutput: 'D-',
		},
		{
			score: 59,
			expectedOutput: 'F',
		},
	];

	tester.handleTestCases({
		tests: getGradeTestCases,
		func: getGrade,
		params: ['score'],
		description: `${tester.printFunction(getGrade)} should return the letter grade for the provided number ${tester.printParam('score')}.`,
	});

	const canVoteTestCases = [
		{
			age: 18,
			expectedOutput: true,
		},
		{
			age: 17,
			expectedOutput: false,
		},
		{
			age: 16,
			expectedOutput: false,
		},
		{
			age: 21,
			expectedOutput: true,
		},
	];

	tester.handleTestCases({
		tests: canVoteTestCases,
		func: canVote,
		params: ['age'],
		description: `${tester.printFunction(canVote)} should return ${tester.printBoolean(true)} if the provided ${tester.printParam('age')} is 18 or older, otherwise ${tester.printBoolean(false)}.`,
	});

	const isIntegerTestCases = [
		{
			number: 1,
			expectedOutput: true,
		},
		{
			number: 1.5,
			expectedOutput: false,
		},
		{
			number: -1,
			expectedOutput: true,
		},
		{
			number: -1.5,
			expectedOutput: false,
		},
		{
			number: '1',
			expectedOutput: false,
		},
		{
			number: false,
			expectedOutput: false,
		},
		{
			number: null,
			expectedOutput: false,
		},
		{
			number: [1],
			expectedOutput: false,
		},
	];

	tester.handleTestCases({
		tests: isIntegerTestCases,
		func: isInteger,
		params: ['number'],
		description: `${tester.printFunction(isInteger)} should return ${tester.printBoolean(true)} if the provided ${tester.printParam('number')} is an integer, otherwise ${tester.printBoolean(false)}.`,
	});

	tester.handleRandomTests({
		func: rollDie,
		expectedRange: { min: 1, max: 6 },
		numTests: 10,
		description: `${tester.printFunction(rollDie)} should return a random number between 1 and 6.`,
	});

	tester.handleRandomTests({
		func: rollDice,
		expectedRange: { min: 1, max: 12 },
		numTests: 10,
		description: `${tester.printFunction(rollDice)} should return a random number between 1 and 12.`,
	});

	tester.printTestSuiteResults();
}

runTests();
