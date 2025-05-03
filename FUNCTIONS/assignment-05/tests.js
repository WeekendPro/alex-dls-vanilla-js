import solution from './solution.js';
import { Tester } from '../../shared/tester.js';

function runTests() {
	const tester = new Tester();
	const {
		reverseString,
		countCharacter,
		countVowels,
		countConsonants,
		reverseArray,
		checkValueInArray,
		getPositiveNumbers,
		getNegativeNumbers,
		getEvenNumbers,
		getOddNumbers,
		convertToUppercase,
		convertToLowercase,
		doubleNumbers,
		squareNumbers,
	} = solution;

	const reverseStringTestCases = [
		{
			string: 'hello',
			expectedOutput: 'olleh',
		},
		{
			string: 'world',
			expectedOutput: 'dlrow',
		},
		{
			string: 'JavaScript',
			expectedOutput: 'tpircSavaJ',
		},
		{
			string: 'racecar',
			expectedOutput: 'racecar',
		},
	];

	tester.handleTestCases({
		tests: reverseStringTestCases,
		func: reverseString,
		params: ['string'],
		description: `${tester.printFunction(reverseString)} should return the provided ${tester.printParam('string')} reversed.`,
	});

	const countCharacterTestCases = [
		{
			string: 'hello',
			character: 'l',
			expectedOutput: 2,
		},
		{
			string: 'hello',
			character: 'o',
			expectedOutput: 1,
		},
		{
			string: 'hello',
			character: 'x',
			expectedOutput: 0,
		},
		{
			string: 'supercalifragilisticexpialidocious',
			character: 'i',
			expectedOutput: 7,
		},
		{
			string: 'neil patrick harris',
			character: 'a',
			expectedOutput: 2,
		},
	];

	tester.handleTestCases({
		tests: countCharacterTestCases,
		func: countCharacter,
		params: ['string', 'character'],
		description: `${tester.printFunction(countCharacter)} should return the number of times the provided ${tester.printParam('character')} appears in the provided ${tester.printParam('string')}.`,
	});

	const countVowelsTestCases = [
		{
			string: 'hello',
			expectedOutput: 2,
		},
		{
			string: 'world',
			expectedOutput: 1,
		},
		{
			string: 'JavaScript',
			expectedOutput: 3,
		},
		{
			string: 'neil patrick harris',
			expectedOutput: 6,
		},
		{
			string: 'aeiou',
			expectedOutput: 5,
		},
		{
			string: 'AEIOU',
			expectedOutput: 5,
		},
	];

	tester.handleTestCases({
		tests: countVowelsTestCases,
		func: countVowels,
		params: ['string'],
		description: `${tester.printFunction(countVowels)} should return the number of vowels in the provided ${tester.printParam('string')}.`,
	});

	const countConsonantsTestCases = [
		{
			string: 'hello',
			expectedOutput: 3,
		},
		{
			string: 'world',
			expectedOutput: 4,
		},
		{
			string: 'JavaScript',
			expectedOutput: 7,
		},
		{
			string: 'aeiou',
			expectedOutput: 0,
		},
		{
			string: 'NEIL PATRICK HARRIS',
			expectedOutput: 11,
		},
	];

	tester.handleTestCases({
		tests: countConsonantsTestCases,
		func: countConsonants,
		params: ['string'],
		description: `${tester.printFunction(countConsonants)} should return the number of consonants in the provided ${tester.printParam('string')}.`,
	});

	const reverseArrayTestCases = [
		{
			numbers: [1, 2, 3, 4, 5],
			expectedOutput: [5, 4, 3, 2, 1],
		},
		{
			numbers: ['a', 'b', 'c', 'd', 'e'],
			expectedOutput: ['e', 'd', 'c', 'b', 'a'],
		},
		{
			numbers: [1, 2, 3, 4, 5],
			expectedOutput: [5, 4, 3, 2, 1],
		},
		{
			numbers: [],
			expectedOutput: [],
		},
		{
			numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			expectedOutput: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
		},
	];

	tester.handleTestCases({
		tests: reverseArrayTestCases,
		func: reverseArray,
		params: ['numbers'],
		forceArrayOrder: true,
		description: `${tester.printFunction(reverseArray)} should return a new array with the elements of the provided ${tester.printParam('numbers')} in reverse order.`,
	});

	const checkValueInArrayTestCases = [
		{
			array: [1, 2, 3, 4, 5],
			target: 3,
			expectedOutput: true,
		},
		{
			array: [1, 2, 3, 4, 5],
			target: 6,
			expectedOutput: false,
		},
		{
			array: [93, 94, 95, 96, 97],
			target: 93,
			expectedOutput: true,
		},
		{
			array: [93, 94, 95, 96, 97],
			target: 98,
			expectedOutput: false,
		},
		{
			array: ['a', 'b', 'c', 'd', 'e'],
			target: 'a',
			expectedOutput: true,
		},
		{
			array: ['a', 'b', 'c', 'd', 'e'],
			target: 'f',
			expectedOutput: false,
		},
		{
			array: [],
			target: 'a value',
			expectedOutput: false,
		},
	];

	tester.handleTestCases({
		tests: checkValueInArrayTestCases,
		func: checkValueInArray,
		params: ['array', 'target'],
		description: `${tester.printFunction(checkValueInArray)} should return ${tester.printBoolean(true)} if the provided ${tester.printParam('target')} exists in the provided ${tester.printParam('array')}, otherwise ${tester.printBoolean(false)}.`,
	});

	const getPositiveNumbersTestCases = [
		{
			numbers: [1, 2, 3, 4, 5],
			expectedOutput: [1, 2, 3, 4, 5],
		},
		{
			numbers: [-1, -2, -3, -4, -5],
			expectedOutput: [],
		},
		{
			numbers: [0, 0, 0, 0, 0],
			expectedOutput: [],
		},
		{
			numbers: [1, -2, 3, -4, 5],
			expectedOutput: [1, 3, 5],
		},
		{
			numbers: [-10, 9, -8, 7, -6, 5, -4, 3, -2, 1],
			expectedOutput: [9, 7, 5, 3, 1],
		},
	];

	tester.handleTestCases({
		tests: getPositiveNumbersTestCases,
		func: getPositiveNumbers,
		params: ['numbers'],
		description: `${tester.printFunction(getPositiveNumbers)} should return a new array with the positive numbers from the provided ${tester.printParam('numbers')}.`,
	});

	const getNegativeNumbersTestCases = [
		{
			numbers: [1, 2, 3, 4, 5],
			expectedOutput: [],
		},
		{
			numbers: [-1, -2, -3, -4, -5],
			expectedOutput: [-1, -2, -3, -4, -5],
		},
		{
			numbers: [0, 0, 0, 0, 0],
			expectedOutput: [],
		},
		{
			numbers: [1, -2, 3, -4, 5],
			expectedOutput: [-2, -4],
		},
		{
			numbers: [-10, 9, -8, 7, -6, 5, -4, 3, -2, 1],
			expectedOutput: [-10, -8, -6, -4, -2],
		},
	];

	tester.handleTestCases({
		tests: getNegativeNumbersTestCases,
		func: getNegativeNumbers,
		params: ['numbers'],
		description: `${tester.printFunction(getNegativeNumbers)} should return a new array with the negative numbers from the provided ${tester.printParam('numbers')}.`,
	});

	const getEvenNumbersTestCases = [
		{
			numbers: [1, 2, 3, 4, 5],
			expectedOutput: [2, 4],
		},
		{
			numbers: [1, 3, 5, 7, 9],
			expectedOutput: [],
		},
		{
			numbers: [0, 0, 0, 0, 0],
			expectedOutput: [0, 0, 0, 0, 0],
		},
		{
			numbers: [2, 4, 6, 8, 10],
			expectedOutput: [2, 4, 6, 8, 10],
		},
		{
			numbers: [-1, -2, -3, -4, -5],
			expectedOutput: [-2, -4],
		},
	];

	tester.handleTestCases({
		tests: getEvenNumbersTestCases,
		func: getEvenNumbers,
		params: ['numbers'],
		description: `${tester.printFunction(getEvenNumbers)} should return a new array with the even numbers from the provided ${tester.printParam('numbers')}.`,
	});

	const getOddNumbersTestCases = [
		{
			numbers: [1, 2, 3, 4, 5],
			expectedOutput: [1, 3, 5],
		},
		{
			numbers: [2, 4, 6, 8, 10],
			expectedOutput: [],
		},
		{
			numbers: [0, 0, 0, 0, 0],
			expectedOutput: [],
		},
		{
			numbers: [-1, -2, -3, -4, -5],
			expectedOutput: [-1, -3, -5],
		},
	];

	tester.handleTestCases({
		tests: getOddNumbersTestCases,
		func: getOddNumbers,
		params: ['numbers'],
		description: `${tester.printFunction(getOddNumbers)} should return a new array with the odd numbers from the provided ${tester.printParam('numbers')}.`,
	});

	const convertToUppercaseTestCases = [
		{
			strings: ['hello', 'world', 'javascript'],
			expectedOutput: ['HELLO', 'WORLD', 'JAVASCRIPT'],
		},
		{
			strings: ['NEIL PATRICK HARRIS', 'aeiou', 'AEIOU'],
			expectedOutput: ['NEIL PATRICK HARRIS', 'AEIOU', 'AEIOU'],
		},
		{
			strings: [],
			expectedOutput: [],
		},
		{
			strings: ['123', '456', '789'],
			expectedOutput: ['123', '456', '789'],
		},
		{
			strings: ['Boston Celtics', 'Los Angeles Lakers', 'Chicago Bulls'],
			expectedOutput: ['BOSTON CELTICS', 'LOS ANGELES LAKERS', 'CHICAGO BULLS'],
		},
		{
			strings: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
			expectedOutput: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
		},
	];

	tester.handleTestCases({
		tests: convertToUppercaseTestCases,
		func: convertToUppercase,
		params: ['strings'],
		forceArrayOrder: true,
		description: `${tester.printFunction(convertToUppercase)} should return a new array with the strings in the provided ${tester.printParam('strings')} converted to uppercase.`,
	});

	const convertToLowercaseTestCases = [
		{
			strings: ['HELLO', 'WORLD', 'JAVASCRIPT'],
			expectedOutput: ['hello', 'world', 'javascript'],
		},
		{
			strings: ['NEIL PATRICK HARRIS', 'AEIOU', 'AEIOU'],
			expectedOutput: ['neil patrick harris', 'aeiou', 'aeiou'],
		},
		{
			strings: [],
			expectedOutput: [],
		},
		{
			strings: ['123', '456', '789'],
			expectedOutput: ['123', '456', '789'],
		},
		{
			strings: ['Boston Celtics', 'Los Angeles Lakers', 'Chicago Bulls'],
			expectedOutput: ['boston celtics', 'los angeles lakers', 'chicago bulls'],
		},
		{
			strings: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
			expectedOutput: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
		},
	];

	tester.handleTestCases({
		tests: convertToLowercaseTestCases,
		func: convertToLowercase,
		params: ['strings'],
		forceArrayOrder: true,
		description: `${tester.printFunction(convertToLowercase)} should return a new array with the strings in the provided ${tester.printParam('strings')} converted to lowercase.`,
	});

	const doubleNumbersTestCases = [
		{
			numbers: [1, 2, 3, 4, 5],
			expectedOutput: [2, 4, 6, 8, 10],
		},
		{
			numbers: [0, 0, 0, 0, 0],
			expectedOutput: [0, 0, 0, 0, 0],
		},
		{
			numbers: [-1, -2, -3, -4, -5],
			expectedOutput: [-2, -4, -6, -8, -10],
		},
		{
			numbers: [1, 3, 5, 7, 9],
			expectedOutput: [2, 6, 10, 14, 18],
		},
		{
			numbers: [42, 11, 29, 99, 310, 4, 1, 45, 87, 932, 588, 42],
			expectedOutput: [84, 22, 58, 198, 620, 8, 2, 90, 174, 1864, 1176, 84],
		},
	];

	tester.handleTestCases({
		tests: doubleNumbersTestCases,
		func: doubleNumbers,
		params: ['numbers'],
		forceArrayOrder: true,
		description: `${tester.printFunction(doubleNumbers)} should return a new array with the numbers in the provided ${tester.printParam('numbers')} doubled.`,
	});

	const squareNumbersTestCases = [
		{
			numbers: [1, 2, 3, 4, 5],
			expectedOutput: [1, 4, 9, 16, 25],
		},
		{
			numbers: [0, 0, 0, 0, 0],
			expectedOutput: [0, 0, 0, 0, 0],
		},
		{
			numbers: [-1, -2, -3, -4, -5],
			expectedOutput: [1, 4, 9, 16, 25],
		},
		{
			numbers: [1, 3, 5, 7, 9],
			expectedOutput: [1, 9, 25, 49, 81],
		},
	];

	tester.handleTestCases({
		tests: squareNumbersTestCases,
		func: squareNumbers,
		params: ['numbers'],
		forceArrayOrder: true,
		description: `${tester.printFunction(squareNumbers)} should return a new array with the numbers in the provided ${tester.printParam('numbers')} squared.`,
	});

	tester.printTestSuiteResults();
}
runTests();
