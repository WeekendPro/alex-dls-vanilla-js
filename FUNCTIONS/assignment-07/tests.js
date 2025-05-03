import solution from './solution.js';
import { handleTestCases } from '../../shared/utils.js';

function runTests() {
	const {
		containsHello,
		getInitials,
		getWordCount,
		joinWords,
		areAllNumbersPositive,
		isAnyNumberNegative,
		calculateFactorial,
		calculatePowerByLoop,
		isPalindrome,
		reverseArray,
	} = solution;

	const containsHelloTestCases = [
		{
			input: 'hello',
			expectedOutput: true,
		},
		{
			input: 'world',
			expectedOutput: false,
		},
		{
			input: 'hello world',
			expectedOutput: true,
		},
		{
			input: 'HELLO',
			expectedOutput: true,
		},
		{
			input: 'I would like to say "Hello" to you and yours.',
			expectedOutput: true,
		},
	];

	handleTestCases({
		tests: containsHelloTestCases,
		func: containsHello,
		params: ['input'],
	});

	const getInitialsTestCases = [
		{
			input: 'John Doe',
			expectedOutput: 'JD',
		},
		{
			input: 'Jane Smith',
			expectedOutput: 'JS',
		},
		{
			input: 'Alice Johnson',
			expectedOutput: 'AJ',
		},
		{
			input: 'Bob Brown',
			expectedOutput: 'BB',
		},
		{
			input: 'Alexandria Ocaio Cortez',
			expectedOutput: 'AOC',
		},
		{
			input: 'John F. Kennedy',
			expectedOutput: 'JFK',
		},
		{
			input: 'Juan Carlos Mendoza Sosa',
			expectedOutput: 'JCMS',
		},
	];

	handleTestCases({
		tests: getInitialsTestCases,
		func: getInitials,
		params: ['input'],
	});

	const getWordCountTestCases = [
		{
			input: 'Hello world',
			expectedOutput: 2,
		},
		{
			input: 'This is a test',
			expectedOutput: 4,
		},
		{
			input: 'Hello',
			expectedOutput: 1,
		},
		{
			input: 'The players association requested a meeting with the board.',
			expectedOutput: 9,
		},
	];

	handleTestCases({
		tests: getWordCountTestCases,
		func: getWordCount,
		params: ['input'],
	});

	const joinWordsTestCases = [
		{
			input: ['Hello', 'world'],
			expectedOutput: 'Hello world',
		},
		{
			input: ['This', 'is', 'a', 'test'],
			expectedOutput: 'This is a test',
		},
		{
			input: ['The', 'fountain', 'of', 'youth'],
			expectedOutput: 'The fountain of youth',
		},
	];

	handleTestCases({
		tests: joinWordsTestCases,
		func: joinWords,
		params: ['input'],
	});

	const areAllNumbersPositiveTestCases = [
		{
			input: [1, 2, 3, 4, 5],
			expectedOutput: true,
		},
		{
			input: [1, 2, 3, 4, -5],
			expectedOutput: false,
		},
		{
			input: [1],
			expectedOutput: true,
		},
		{
			input: [-1, -2, -3, -4, -5],
			expectedOutput: false,
		},
		{
			input: [10, 20, 30, 40, 50],
			expectedOutput: true,
		},
	];

	handleTestCases({
		tests: areAllNumbersPositiveTestCases,
		func: areAllNumbersPositive,
		params: ['input'],
	});

	const isAnyNumberNegativeTestCases = [
		{
			input: [1, 2, 3, 4, 5],
			expectedOutput: false,
		},
		{
			input: [1, 2, 3, 4, -5],
			expectedOutput: true,
		},
		{
			input: [1],
			expectedOutput: false,
		},
		{
			input: [-1, -2, -3, -4, -5],
			expectedOutput: true,
		},
		{
			input: [-1],
			expectedOutput: true,
		},
	];

	handleTestCases({
		tests: isAnyNumberNegativeTestCases,
		func: isAnyNumberNegative,
		params: ['input'],
	});

	const calculateFactorialTestCases = [
		{
			input: 0,
			expectedOutput: 1,
		},
		{
			input: 1,
			expectedOutput: 1,
		},
		{
			input: 2,
			expectedOutput: 2,
		},
		{
			input: 3,
			expectedOutput: 6,
		},
		{
			input: 4,
			expectedOutput: 24,
		},
		{
			input: 5,
			expectedOutput: 120,
		},
		{
			input: 6,
			expectedOutput: 720,
		},
	];

	handleTestCases({
		tests: calculateFactorialTestCases,
		func: calculateFactorial,
		params: ['input'],
	});

	const calculatePowerByLoopTestCases = [
		{
			base: 2,
			exponent: 3,
			expectedOutput: 8,
		},
		{
			base: 3,
			exponent: 2,
			expectedOutput: 9,
		},
		{
			base: 5,
			exponent: 0,
			expectedOutput: 1,
		},
		{
			base: 10,
			exponent: 10,
			expectedOutput: 10000000000,
		},
		{
			base: 2,
			exponent: 10,
			expectedOutput: 1024,
		},
		{
			base: 7,
			exponent: 3,
			expectedOutput: 343,
		},
	];

	handleTestCases({
		tests: calculatePowerByLoopTestCases,
		func: calculatePowerByLoop,
		params: ['base', 'exponent'],
	});

	const isPalindromeTestCases = [
		{
			input: 'racecar',
			expectedOutput: true,
		},
		{
			input: 'hello',
			expectedOutput: false,
		},
		{
			input: 'kayak',
			expectedOutput: true,
		},
		{
			input: 'madam',
			expectedOutput: true,
		},
		{
			input: '12321',
			expectedOutput: true,
		},
		{
			input: '12345',
			expectedOutput: false,
		},
		{
			input: 'level',
			expectedOutput: true,
		},
		{
			input: 'noon',
			expectedOutput: true,
		},
		{
			input: 'moron',
			expectedOutput: false,
		},
	];

	handleTestCases({
		tests: isPalindromeTestCases,
		func: isPalindrome,
		params: ['input'],
	});

	const reverseArrayTestCases = [
		{
			input: ['Hello', 'world'],
			expectedOutput: ['world', 'Hello'],
		},
		{
			input: ['This', 'is', 'a', 'test'],
			expectedOutput: ['test', 'a', 'is', 'This'],
		},
		{
			input: [1, 2, 3, 4, 5],
			expectedOutput: [5, 4, 3, 2, 1],
		},
		{
			input: ['A', 'B', 'C', 'D', 'E'],
			expectedOutput: ['E', 'D', 'C', 'B', 'A'],
		},
		{
			input: ['A', 'B', 'C', 'D', 'E'],
			expectedOutput: ['E', 'D', 'C', 'B', 'A'],
		},
	];

	handleTestCases({
		tests: reverseArrayTestCases,
		func: reverseArray,
		params: ['input'],
		forceArrayOrder: true,
	});
}

runTests();
