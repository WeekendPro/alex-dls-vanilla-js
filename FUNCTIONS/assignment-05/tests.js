import solution from './solution.js';
import { handleTestCases } from '../../shared/utils.js';

function runTests() {
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
			input: 'hello',
			expectedOutput: 'olleh',
		},
		{
			input: 'world',
			expectedOutput: 'dlrow',
		},
		{
			input: 'JavaScript',
			expectedOutput: 'tpircSavaJ',
		},
		{
			input: 'racecar',
			expectedOutput: 'racecar',
		},
	];

	handleTestCases({
		tests: reverseStringTestCases,
		func: reverseString,
		params: ['input'],
	});

	const countCharacterTestCases = [
		{
			str: 'hello',
			character: 'l',
			expectedOutput: 2,
		},
		{
			str: 'hello',
			character: 'o',
			expectedOutput: 1,
		},
		{
			str: 'hello',
			character: 'x',
			expectedOutput: 0,
		},
		{
			str: 'supercalifragilisticexpialidocious',
			character: 'i',
			expectedOutput: 7,
		},
		{
			str: 'neil patrick harris',
			character: 'a',
			expectedOutput: 2,
		},
	];

	handleTestCases({
		tests: countCharacterTestCases,
		func: countCharacter,
		params: ['str', 'character'],
	});

	const countVowelsTestCases = [
		{
			input: 'hello',
			expectedOutput: 2,
		},
		{
			input: 'world',
			expectedOutput: 1,
		},
		{
			input: 'JavaScript',
			expectedOutput: 3,
		},
		{
			input: 'neil patrick harris',
			expectedOutput: 6,
		},
		{
			input: 'aeiou',
			expectedOutput: 5,
		},
		{
			input: 'AEIOU',
			expectedOutput: 5,
		},
	];

	handleTestCases({
		tests: countVowelsTestCases,
		func: countVowels,
		params: ['input'],
	});

	const countConsonantsTestCases = [
		{
			input: 'hello',
			expectedOutput: 3,
		},
		{
			input: 'world',
			expectedOutput: 4,
		},
		{
			input: 'JavaScript',
			expectedOutput: 7,
		},
		{
			input: 'aeiou',
			expectedOutput: 0,
		},
		{
			input: 'NEIL PATRICK HARRIS',
			expectedOutput: 11,
		},
	];

	handleTestCases({
		tests: countConsonantsTestCases,
		func: countConsonants,
		params: ['input'],
	});

	const reverseArrayTestCases = [
		{
			input: [1, 2, 3, 4, 5],
			expectedOutput: [5, 4, 3, 2, 1],
		},
		{
			input: ['a', 'b', 'c', 'd', 'e'],
			expectedOutput: ['e', 'd', 'c', 'b', 'a'],
		},
		{
			input: [1, 2, 3, 4, 5],
			expectedOutput: [5, 4, 3, 2, 1],
		},
		{
			input: [],
			expectedOutput: [],
		},
		{
			input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			expectedOutput: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
		},
	];

	handleTestCases({
		tests: reverseArrayTestCases,
		func: reverseArray,
		params: ['input'],
		forceArrayOrder: true,
	});

	const checkValueInArrayTestCases = [
		{
			array: [1, 2, 3, 4, 5],
			value: 3,
			expectedOutput: true,
		},
		{
			array: [1, 2, 3, 4, 5],
			value: 6,
			expectedOutput: false,
		},
		{
			array: [93, 94, 95, 96, 97],
			value: 93,
			expectedOutput: true,
		},
		{
			array: [93, 94, 95, 96, 97],
			value: 98,
			expectedOutput: false,
		},
		{
			array: ['a', 'b', 'c', 'd', 'e'],
			value: 'a',
			expectedOutput: true,
		},
		{
			array: ['a', 'b', 'c', 'd', 'e'],
			value: 'f',
			expectedOutput: false,
		},
		{
			array: [],
			value: 'a value',
			expectedOutput: false,
		},
	];

	handleTestCases({
		tests: checkValueInArrayTestCases,
		func: checkValueInArray,
		params: ['array', 'value'],
	});

	const getPositiveNumbersTestCases = [
		{
			input: [1, 2, 3, 4, 5],
			expectedOutput: [1, 2, 3, 4, 5],
		},
		{
			input: [-1, -2, -3, -4, -5],
			expectedOutput: [],
		},
		{
			input: [0, 0, 0, 0, 0],
			expectedOutput: [],
		},
		{
			input: [1, -2, 3, -4, 5],
			expectedOutput: [1, 3, 5],
		},
		{
			input: [-10, 9, -8, 7, -6, 5, -4, 3, -2, 1],
			expectedOutput: [9, 7, 5, 3, 1],
		},
	];

	handleTestCases({
		tests: getPositiveNumbersTestCases,
		func: getPositiveNumbers,
		params: ['input'],
	});

	const getNegativeNumbersTestCases = [
		{
			input: [1, 2, 3, 4, 5],
			expectedOutput: [],
		},
		{
			input: [-1, -2, -3, -4, -5],
			expectedOutput: [-1, -2, -3, -4, -5],
		},
		{
			input: [0, 0, 0, 0, 0],
			expectedOutput: [],
		},
		{
			input: [1, -2, 3, -4, 5],
			expectedOutput: [-2, -4],
		},
		{
			input: [-10, 9, -8, 7, -6, 5, -4, 3, -2, 1],
			expectedOutput: [-10, -8, -6, -4, -2],
		},
	];

	handleTestCases({
		tests: getNegativeNumbersTestCases,
		func: getNegativeNumbers,
		params: ['input'],
	});

	const getEvenNumbersTestCases = [
		{
			input: [1, 2, 3, 4, 5],
			expectedOutput: [2, 4],
		},
		{
			input: [1, 3, 5, 7, 9],
			expectedOutput: [],
		},
		{
			input: [0, 0, 0, 0, 0],
			expectedOutput: [0, 0, 0, 0, 0],
		},
		{
			input: [2, 4, 6, 8, 10],
			expectedOutput: [2, 4, 6, 8, 10],
		},
		{
			input: [-1, -2, -3, -4, -5],
			expectedOutput: [-2, -4],
		},
	];

	handleTestCases({
		tests: getEvenNumbersTestCases,
		func: getEvenNumbers,
		params: ['input'],
	});

	const getOddNumbersTestCases = [
		{
			input: [1, 2, 3, 4, 5],
			expectedOutput: [1, 3, 5],
		},
		{
			input: [2, 4, 6, 8, 10],
			expectedOutput: [],
		},
		{
			input: [0, 0, 0, 0, 0],
			expectedOutput: [],
		},
		{
			input: [-1, -2, -3, -4, -5],
			expectedOutput: [-1, -3, -5],
		},
	];

	handleTestCases({
		tests: getOddNumbersTestCases,
		func: getOddNumbers,
		params: ['input'],
	});

	const convertToUppercaseTestCases = [
		{
			input: ['hello', 'world', 'javascript'],
			expectedOutput: ['HELLO', 'WORLD', 'JAVASCRIPT'],
		},
		{
			input: ['NEIL PATRICK HARRIS', 'aeiou', 'AEIOU'],
			expectedOutput: ['NEIL PATRICK HARRIS', 'AEIOU', 'AEIOU'],
		},
		{
			input: [],
			expectedOutput: [],
		},
		{
			input: ['123', '456', '789'],
			expectedOutput: ['123', '456', '789'],
		},
		{
			input: ['Boston Celtics', 'Los Angeles Lakers', 'Chicago Bulls'],
			expectedOutput: ['BOSTON CELTICS', 'LOS ANGELES LAKERS', 'CHICAGO BULLS'],
		},
		{
			input: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
			expectedOutput: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
		},
	];

	handleTestCases({
		tests: convertToUppercaseTestCases,
		func: convertToUppercase,
		params: ['input'],
		forceArrayOrder: true,
	});

	const convertToLowercaseTestCases = [
		{
			input: ['HELLO', 'WORLD', 'JAVASCRIPT'],
			expectedOutput: ['hello', 'world', 'javascript'],
		},
		{
			input: ['NEIL PATRICK HARRIS', 'AEIOU', 'AEIOU'],
			expectedOutput: ['neil patrick harris', 'aeiou', 'aeiou'],
		},
		{
			input: [],
			expectedOutput: [],
		},
		{
			input: ['123', '456', '789'],
			expectedOutput: ['123', '456', '789'],
		},
		{
			input: ['Boston Celtics', 'Los Angeles Lakers', 'Chicago Bulls'],
			expectedOutput: ['boston celtics', 'los angeles lakers', 'chicago bulls'],
		},
		{
			input: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
			expectedOutput: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
		},
	];

	handleTestCases({
		tests: convertToLowercaseTestCases,
		func: convertToLowercase,
		params: ['input'],
		forceArrayOrder: true,
	});

	const doubleNumbersTestCases = [
		{
			input: [1, 2, 3, 4, 5],
			expectedOutput: [2, 4, 6, 8, 10],
		},
		{
			input: [0, 0, 0, 0, 0],
			expectedOutput: [0, 0, 0, 0, 0],
		},
		{
			input: [-1, -2, -3, -4, -5],
			expectedOutput: [-2, -4, -6, -8, -10],
		},
		{
			input: [1, 3, 5, 7, 9],
			expectedOutput: [2, 6, 10, 14, 18],
		},
		{
			input: [42, 11, 29, 99, 310, 4, 1, 45, 87, 932, 588, 42],
			expectedOutput: [84, 22, 58, 198, 620, 8, 2, 90, 174, 1864, 1176, 84],
		},
	];

	handleTestCases({
		tests: doubleNumbersTestCases,
		func: doubleNumbers,
		params: ['input'],
		forceArrayOrder: true,
	});

	const squareNumbersTestCases = [
		{
			input: [1, 2, 3, 4, 5],
			expectedOutput: [1, 4, 9, 16, 25],
		},
		{
			input: [0, 0, 0, 0, 0],
			expectedOutput: [0, 0, 0, 0, 0],
		},
		{
			input: [-1, -2, -3, -4, -5],
			expectedOutput: [1, 4, 9, 16, 25],
		},
		{
			input: [1, 3, 5, 7, 9],
			expectedOutput: [1, 9, 25, 49, 81],
		},
	];

	handleTestCases({
		tests: squareNumbersTestCases,
		func: squareNumbers,
		params: ['input'],
		forceArrayOrder: true,
	});
}
runTests();
