import solution from './solution.js';
import { Tester } from '../../shared/tester.js';

function runTests() {
	const tester = new Tester();

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
			string: 'hello',
			expectedOutput: true,
		},
		{
			string: 'world',
			expectedOutput: false,
		},
		{
			string: 'hello world',
			expectedOutput: true,
		},
		{
			string: 'HELLO',
			expectedOutput: true,
		},
		{
			string: 'I would like to say hello.',
			expectedOutput: true,
		},
	];

	tester.handleTestCases({
		tests: containsHelloTestCases,
		func: containsHello,
		params: ['string'],
		description: `${tester.printFunction(containsHello)} should return ${tester.printBoolean(true)} if the ${tester.printParam('string')} contains the substring ${tester.printString('hello')}, otherwise ${tester.printBoolean(false)}.`,
	});

	const getInitialsTestCases = [
		{
			fullName: 'John Doe',
			expectedOutput: 'JD',
		},
		{
			fullName: 'Jane Smith',
			expectedOutput: 'JS',
		},
		{
			fullName: 'Alice Johnson',
			expectedOutput: 'AJ',
		},
		{
			fullName: 'Bob Brown',
			expectedOutput: 'BB',
		},
		{
			fullName: 'Alexandria Ocaio Cortez',
			expectedOutput: 'AOC',
		},
		{
			fullName: 'John F. Kennedy',
			expectedOutput: 'JFK',
		},
		{
			fullName: 'Juan Carlos Mendoza Sosa',
			expectedOutput: 'JCMS',
		},
	];

	tester.handleTestCases({
		tests: getInitialsTestCases,
		func: getInitials,
		params: ['fullName'],
		description: `${tester.printFunction(getInitials)} should return the initials of the ${tester.printParam('fullName')}.`,
	});

	const getWordCountTestCases = [
		{
			sentence: 'Hello world',
			expectedOutput: 2,
		},
		{
			sentence: 'This is a test',
			expectedOutput: 4,
		},
		{
			sentence: 'Hello',
			expectedOutput: 1,
		},
		{
			sentence: 'The players association requested a meeting with the board.',
			expectedOutput: 9,
		},
	];

	tester.handleTestCases({
		tests: getWordCountTestCases,
		func: getWordCount,
		params: ['sentence'],
		description: `${tester.printFunction(getWordCount)} should return the number of words in the ${tester.printParam('sentence')}.`,
	});

	const joinWordsTestCases = [
		{
			words: ['Hello', 'world'],
			expectedOutput: 'Hello world',
		},
		{
			words: ['This', 'is', 'a', 'test'],
			expectedOutput: 'This is a test',
		},
		{
			words: ['The', 'fountain', 'of', 'youth'],
			expectedOutput: 'The fountain of youth',
		},
	];

	tester.handleTestCases({
		tests: joinWordsTestCases,
		func: joinWordsIntoSentence,
		params: ['words'],
		description: `${tester.printFunction(joinWordsIntoSentence)} should return the ${tester.printParam('words')} joined by spaces.`,
	});

	const areAllNumbersPositiveTestCases = [
		{
			numbers: [1, 2, 3, 4, 5],
			expectedOutput: true,
		},
		{
			numbers: [1, 2, 3, 4, -5],
			expectedOutput: false,
		},
		{
			numbers: [1],
			expectedOutput: true,
		},
		{
			numbers: [-1, -2, -3, -4, -5],
			expectedOutput: false,
		},
		{
			numbers: [10, 20, 30, 40, 50],
			expectedOutput: true,
		},
	];

	tester.handleTestCases({
		tests: areAllNumbersPositiveTestCases,
		func: areAllNumbersPositive,
		params: ['numbers'],
		description: `${tester.printFunction(areAllNumbersPositive)} should return ${tester.printBoolean(true)} if all numbers in the ${tester.printParam('numbers')} are positive, otherwise ${tester.printBoolean(false)}.`,
	});

	const isAnyNumberNegativeTestCases = [
		{
			numbers: [1, 2, 3, 4, 5],
			expectedOutput: false,
		},
		{
			numbers: [1, 2, 3, 4, -5],
			expectedOutput: true,
		},
		{
			numbers: [1],
			expectedOutput: false,
		},
		{
			numbers: [-1, -2, -3, -4, -5],
			expectedOutput: true,
		},
		{
			numbers: [-1],
			expectedOutput: true,
		},
	];

	tester.handleTestCases({
		tests: isAnyNumberNegativeTestCases,
		func: isAnyNumberNegative,
		params: ['numbers'],
		description: `${tester.printFunction(isAnyNumberNegative)} should return ${tester.printBoolean(true)} if any number in the ${tester.printParam('numbers')} is negative, otherwise ${tester.printBoolean(false)}.`,
	});

	const calculateFactorialTestCases = [
		{
			number: 0,
			expectedOutput: 1,
		},
		{
			number: 1,
			expectedOutput: 1,
		},
		{
			number: 2,
			expectedOutput: 2,
		},
		{
			number: 3,
			expectedOutput: 6,
		},
		{
			number: 4,
			expectedOutput: 24,
		},
		{
			number: 5,
			expectedOutput: 120,
		},
		{
			number: 6,
			expectedOutput: 720,
		},
	];

	tester.handleTestCases({
		tests: calculateFactorialTestCases,
		func: calculateFactorial,
		params: ['number'],
		description: `${tester.printFunction(calculateFactorial)} should return the factorial of the given ${tester.printParam('number')}.`,
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

	tester.handleTestCases({
		tests: calculatePowerByLoopTestCases,
		func: calculatePowerByLoop,
		params: ['base', 'exponent'],
		description: `${tester.printFunction(calculatePowerByLoop)} should return the ${tester.printParam('base')} raised to the power of the ${tester.printParam('exponent')}.`,
	});

	const isPalindromeTestCases = [
		{
			string: 'racecar',
			expectedOutput: true,
		},
		{
			string: 'hello',
			expectedOutput: false,
		},
		{
			string: 'kayak',
			expectedOutput: true,
		},
		{
			string: 'madam',
			expectedOutput: true,
		},
		{
			string: '12321',
			expectedOutput: true,
		},
		{
			string: '12345',
			expectedOutput: false,
		},
		{
			string: 'level',
			expectedOutput: true,
		},
		{
			string: 'noon',
			expectedOutput: true,
		},
		{
			string: 'moron',
			expectedOutput: false,
		},
	];

	tester.handleTestCases({
		tests: isPalindromeTestCases,
		func: isPalindrome,
		params: ['string'],
		description: `${tester.printFunction(isPalindrome)} should return ${tester.printBoolean(true)} if the ${tester.printParam('string')} is a palindrome, otherwise ${tester.printBoolean(false)}.`,
	});

	const reverseArrayTestCases = [
		{
			array: ['Hello', 'world'],
			expectedOutput: ['world', 'Hello'],
		},
		{
			array: ['This', 'is', 'a', 'test'],
			expectedOutput: ['test', 'a', 'is', 'This'],
		},
		{
			array: [1, 2, 3, 4, 5],
			expectedOutput: [5, 4, 3, 2, 1],
		},
		{
			array: ['A', 'B', 'C', 'D', 'E'],
			expectedOutput: ['E', 'D', 'C', 'B', 'A'],
		},
		{
			array: ['A', 'B', 'C', 'D', 'E'],
			expectedOutput: ['E', 'D', 'C', 'B', 'A'],
		},
	];

	tester.handleTestCases({
		tests: reverseArrayTestCases,
		func: reverseArray,
		params: ['array'],
		forceArrayOrder: true,
		description: `${tester.printFunction(reverseArray)} should return the ${tester.printParam('array')} reversed.`,
	});

	tester.printTestSuiteResults();
}

runTests();
