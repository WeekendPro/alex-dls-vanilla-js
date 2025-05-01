import solution from './solution.js';
import { print } from '../utils.js';

function runTests() {
	const {
		containsHello,
		getInitials,
		getWordCount,
		joinWordsIntoSentence,
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

	console.log('\n\x1b[1m   Tests for `containsHello` \n\x1b[0m');

	for (const testCase of containsHelloTestCases) {
		const { input, expectedOutput } = testCase;
		const result = containsHello(input);
		const isCorrect = result === expectedOutput;
		const base = `called "containsHello" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

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
	console.log('\n\x1b[1m   Tests for `getInitials` \n\x1b[0m');

	for (const testCase of getInitialsTestCases) {
		const { input, expectedOutput } = testCase;
		const result = getInitials(input);
		const isCorrect = result === expectedOutput;
		const base = `called "getInitials" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `getWordCount` \n\x1b[0m');

	for (const testCase of getWordCountTestCases) {
		const { input, expectedOutput } = testCase;
		const result = getWordCount(input);
		const isCorrect = result === expectedOutput;
		const base = `called "getWordCount" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

	const joinWordsIntoSentenceTestCases = [
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

	console.log('\n\x1b[1m   Tests for `joinWordsIntoSentence` \n\x1b[0m');

	for (const testCase of joinWordsIntoSentenceTestCases) {
		const { input, expectedOutput } = testCase;
		const result = joinWordsIntoSentence(input);
		const isCorrect = result === expectedOutput;
		const base = `called "joinWordsIntoSentence" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `areAllNumbersPositive` \n\x1b[0m');

	for (const testCase of areAllNumbersPositiveTestCases) {
		const { input, expectedOutput } = testCase;
		const result = areAllNumbersPositive(input);
		const isCorrect = result === expectedOutput;
		const base = `called "areAllNumbersPositive" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `isAnyNumberNegative` \n\x1b[0m');

	for (const testCase of isAnyNumberNegativeTestCases) {
		const { input, expectedOutput } = testCase;
		const result = isAnyNumberNegative(input);
		const isCorrect = result === expectedOutput;
		const base = `called "isAnyNumberNegative" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `calculateFactorial` \n\x1b[0m');

	for (const testCase of calculateFactorialTestCases) {
		const { input, expectedOutput } = testCase;
		const result = calculateFactorial(input);
		const isCorrect = result === expectedOutput;
		const base = `called "calculateFactorial" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `calculatePowerByLoop` \n\x1b[0m');

	for (const testCase of calculatePowerByLoopTestCases) {
		const { base: baseNumber, exponent, expectedOutput } = testCase;
		const result = calculatePowerByLoop(baseNumber, exponent);
		const isCorrect = result === expectedOutput;
		const base = `called "calculatePowerByLoop" with ${print(baseNumber)} and ${print(exponent)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `isPalindrome` \n\x1b[0m');

	for (const testCase of isPalindromeTestCases) {
		const { input, expectedOutput } = testCase;
		const result = isPalindrome(input);
		const isCorrect = result === expectedOutput;
		const base = `called "isPalindrome" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `reverseArray` \n\x1b[0m');

	for (const testCase of reverseArrayTestCases) {
		const { input, expectedOutput } = testCase;
		const result = reverseArray(input);
		let isCorrect = true;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			for (let i = 0; i < input.length; i++) {
				if (result[i] !== expectedOutput[i]) {
					isCorrect = false;
					break;
				}
			}
		} else {
			isCorrect = false;
		}
		const base = `called "reverseArray" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}
}

runTests();
