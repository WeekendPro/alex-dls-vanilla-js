import solution from './solution.js';
import { print } from '../utils.js';

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

	console.log('\n\x1b[1m   Tests for `reverseString` \n\x1b[0m');

	for (const testCase of reverseStringTestCases) {
		const { input, expectedOutput } = testCase;
		const result = reverseString(input);
		const isCorrect = result === expectedOutput;
		const base = `called "reverseString" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

	const countCharacterTestCases = [
		{
			input: 'hello',
			character: 'l',
			expectedOutput: 2,
		},
		{
			input: 'hello',
			character: 'o',
			expectedOutput: 1,
		},
		{
			input: 'hello',
			character: 'x',
			expectedOutput: 0,
		},
		{
			input: 'supercalifragilisticexpialidocious',
			character: 'i',
			expectedOutput: 7,
		},
		{
			input: 'neil patrick harris',
			character: 'a',
			expectedOutput: 2,
		},
	];

	console.log('\n\x1b[1m   Tests for `countCharacter` \n\x1b[0m');

	for (const testCase of countCharacterTestCases) {
		const { input, character, expectedOutput } = testCase;
		const result = countCharacter(input, character);
		const isCorrect = result === expectedOutput;
		const base = `called "countCharacter" with ${print(input)} and ${print(character)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `countVowels` \n\x1b[0m');

	for (const testCase of countVowelsTestCases) {
		const { input, expectedOutput } = testCase;
		const result = countVowels(input);
		const isCorrect = result === expectedOutput;
		const base = `called "countVowels" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `countConsonants` \n\x1b[0m');

	for (const testCase of countConsonantsTestCases) {
		const { input, expectedOutput } = testCase;
		const result = countConsonants(input);
		const isCorrect = result === expectedOutput;
		const base = `called "countConsonants" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `reverseArray` \n\x1b[0m');

	for (const testCase of reverseArrayTestCases) {
		const { input, expectedOutput } = testCase;
		const result = reverseArray(input);
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			isCorrect =
				result.length === expectedOutput.length &&
				result.every((value, index) => value === expectedOutput[index]);
		} else {
			isCorrect = result === expectedOutput;
		}
		const base = `called "reverseArray" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

	const checkValueInArrayTestCases = [
		{
			input: [1, 2, 3, 4, 5],
			value: 3,
			expectedOutput: true,
		},
		{
			input: [1, 2, 3, 4, 5],
			value: 6,
			expectedOutput: false,
		},
		{
			input: [93, 94, 95, 96, 97],
			value: 93,
			expectedOutput: true,
		},
		{
			input: [93, 94, 95, 96, 97],
			value: 98,
			expectedOutput: false,
		},
		{
			input: ['a', 'b', 'c', 'd', 'e'],
			value: 'a',
			expectedOutput: true,
		},
		{
			input: ['a', 'b', 'c', 'd', 'e'],
			value: 'f',
			expectedOutput: false,
		},
		{
			input: [],
			value: 'a value',
			expectedOutput: false,
		},
	];
	console.log('\n\x1b[1m   Tests for `checkValueInArray` \n\x1b[0m');

	for (const testCase of checkValueInArrayTestCases) {
		const { input, value, expectedOutput } = testCase;
		const result = checkValueInArray(input, value);
		const isCorrect = result === expectedOutput;
		const base = `called "checkValueInArray" with ${print(input)} and ${print(value)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `getPositiveNumbers` \n\x1b[0m');

	for (const testCase of getPositiveNumbersTestCases) {
		const { input, expectedOutput } = testCase;
		const result = getPositiveNumbers(input);
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			isCorrect =
				result.length === expectedOutput.length &&
				result.every((value, index) => value === expectedOutput[index]);
		} else {
			isCorrect = result === expectedOutput;
		}
		const base = `called "getPositiveNumbers" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `getNegativeNumbers` \n\x1b[0m');

	for (const testCase of getNegativeNumbersTestCases) {
		const { input, expectedOutput } = testCase;
		const result = getNegativeNumbers(input);
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			isCorrect =
				result.length === expectedOutput.length &&
				result.every((value, index) => value === expectedOutput[index]);
		} else {
			isCorrect = result === expectedOutput;
		}
		const base = `called "getNegativeNumbers" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `getEvenNumbers` \n\x1b[0m');

	for (const testCase of getEvenNumbersTestCases) {
		const { input, expectedOutput } = testCase;
		const result = getEvenNumbers(input);
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			isCorrect =
				result.length === expectedOutput.length &&
				result.every((value, index) => value === expectedOutput[index]);
		} else {
			isCorrect = result === expectedOutput;
		}
		const base = `called "getEvenNumbers" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `getOddNumbers` \n\x1b[0m');

	for (const testCase of getOddNumbersTestCases) {
		const { input, expectedOutput } = testCase;
		const result = getOddNumbers(input);
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			isCorrect =
				result.length === expectedOutput.length &&
				result.every((value, index) => value === expectedOutput[index]);
		} else {
			isCorrect = result === expectedOutput;
		}
		const base = `called "getOddNumbers" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `convertToUppercase` \n\x1b[0m');

	for (const testCase of convertToUppercaseTestCases) {
		const { input, expectedOutput } = testCase;
		const result = convertToUppercase(input);
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			isCorrect =
				result.length === expectedOutput.length &&
				result.every((value, index) => value === expectedOutput[index]);
		} else {
			isCorrect = result === expectedOutput;
		}
		const base = `called "convertToUppercase" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `convertToLowercase` \n\x1b[0m');

	for (const testCase of convertToLowercaseTestCases) {
		const { input, expectedOutput } = testCase;
		const result = convertToLowercase(input);
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			isCorrect =
				result.length === expectedOutput.length &&
				result.every((value, index) => value === expectedOutput[index]);
		} else {
			isCorrect = result === expectedOutput;
		}
		const base = `called "convertToLowercase" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `doubleNumbers` \n\x1b[0m');

	for (const testCase of doubleNumbersTestCases) {
		const { input, expectedOutput } = testCase;
		const result = doubleNumbers(input);
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			isCorrect =
				result.length === expectedOutput.length &&
				result.every((value, index) => value === expectedOutput[index]);
		} else {
			isCorrect = result === expectedOutput;
		}
		const base = `called "doubleNumbers" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `squareNumbers` \n\x1b[0m');

	for (const testCase of squareNumbersTestCases) {
		const { input, expectedOutput } = testCase;
		const result = squareNumbers(input);
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			isCorrect =
				result.length === expectedOutput.length &&
				result.every((value, index) => value === expectedOutput[index]);
		} else {
			isCorrect = result === expectedOutput;
		}
		const base = `called "squareNumbers" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}
}
runTests();
