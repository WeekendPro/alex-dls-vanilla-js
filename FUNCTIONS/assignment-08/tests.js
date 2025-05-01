import solution from './solution.js';
import { print } from '../utils.js';

function runTests() {
	const {
		removeDuplicates,
		mergeArrays,
		getIntersection,
		getKeys,
		getValues,
		getByKey,
		getLength,
	} = solution;

	const removeDuplicatesTestCases = [
		{
			input: [1, 2, 2, 3, 4, 4, 5],
			expectedOutput: [1, 2, 3, 4, 5],
		},
		{
			input: ['apple', 'banana', 'apple', 'cherry', 'banana', 'date'],
			expectedOutput: ['apple', 'banana', 'cherry', 'date'],
		},
		{
			input: [1, 1, 1, 2, 2, 2, 3, 3, 3],
			expectedOutput: [1, 2, 3],
		},
		{
			input: [1, 2, 3, 4, 5],
			expectedOutput: [1, 2, 3, 4, 5],
		},
	];

	console.log('\n\x1b[1m   Tests for `removeDuplicates` \n\x1b[0m');

	for (const testCase of removeDuplicatesTestCases) {
		const { input, expectedOutput } = testCase;
		const result = removeDuplicates(input);
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			isCorrect = result.every(
				(value, index) => value === expectedOutput[index]
			);
		} else {
			isCorrect = result === expectedOutput;
		}
		const base = `called "removeDuplicates" with ${print(input)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

	const mergeArraysTestCases = [
		{
			arr1: [1, 2, 3],
			arr2: [4, 5, 6],
			expectedOutput: [1, 2, 3, 4, 5, 6],
		},
		{
			arr1: [1],
			arr2: [2, 3, 4, 5, 6],
			expectedOutput: [1, 2, 3, 4, 5, 6],
		},
		{
			arr1: [true, false],
			arr2: [false, true],
			expectedOutput: [true, false, false, true],
		},
		{
			arr1: ['words', 'have', 'power'],
			arr2: ['over', 'us'],
			expectedOutput: ['words', 'have', 'power', 'over', 'us'],
		},
	];

	console.log('\n\x1b[1m   Tests for `mergeArrays` \n\x1b[0m');

	for (const testCase of mergeArraysTestCases) {
		const { arr1, arr2, expectedOutput } = testCase;
		const result = mergeArrays(arr1, arr2);
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			isCorrect = result.every(
				(value, index) => value === expectedOutput[index]
			);
		} else {
			isCorrect = result === expectedOutput;
		}
		const base = `called "mergeArrays" with ${print(arr1)} and ${print(arr2)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

	const getIntersectionTestCases = [
		{
			arr1: [1, 2, 3, 4, 5],
			arr2: [4, 5, 6, 7, 8],
			expectedOutput: [4, 5],
		},
		{
			arr1: [1, 2, 3],
			arr2: [4, 5, 6],
			expectedOutput: [],
		},
		{
			arr1: [true, false],
			arr2: [false, true],
			expectedOutput: [false, true],
		},
		{
			arr1: ['words', 'have', 'power'],
			arr2: ['power', 'of', 'words'],
			expectedOutput: ['power', 'words'],
		},
	];

	console.log('\n\x1b[1m   Tests for `getIntersection` \n\x1b[0m');

	for (const testCase of getIntersectionTestCases) {
		const { arr1, arr2, expectedOutput } = testCase;
		const result = getIntersection(arr1, arr2);
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			isCorrect = expectedOutput.every((value) => result.includes(value));
		} else {
			isCorrect = result === expectedOutput;
		}
		const base = `called "getIntersection" with ${print(arr1)} and ${print(arr2)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

	const getKeysTestCases = [
		{
			obj: { a: 1, b: 2, c: 3 },
			expectedOutput: ['a', 'b', 'c'],
		},
		{
			obj: { name: 'John', age: 30, city: 'New York' },
			expectedOutput: ['name', 'age', 'city'],
		},
		{
			obj: {},
			expectedOutput: [],
		},
		{
			obj: {
				brand: 'Apple',
				os: 'iOS',
				model: 'iPhone 13',
				condition: 'used',
			},
			expectedOutput: ['brand', 'os', 'model', 'condition'],
		},
		{
			obj: { artist: 'Taylor Swift', album: '1989', year: 2014 },
			expectedOutput: ['artist', 'album', 'year'],
		},
	];

	console.log('\n\x1b[1m   Tests for `getKeys` \n\x1b[0m');

	for (const testCase of getKeysTestCases) {
		const { obj, expectedOutput } = testCase;
		const result = getKeys(obj);
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			isCorrect = result.every((value) => expectedOutput.includes(value));
		} else {
			isCorrect = result === expectedOutput;
		}
		const base = `called "getKeys" with ${print(obj)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

	const getValuesTestCases = [
		{
			obj: { a: 1, b: 2, c: 3 },
			expectedOutput: [1, 2, 3],
		},
		{
			obj: { name: 'John', age: 30, city: 'New York' },
			expectedOutput: ['John', 30, 'New York'],
		},
		{
			obj: {},
			expectedOutput: [],
		},
		{
			obj: {
				brand: 'Apple',
				os: 'iOS',
				model: 'iPhone 13',
				condition: 'used',
			},
			expectedOutput: ['Apple', 'iOS', 'iPhone 13', 'used'],
		},
		{
			obj: { artist: 'Taylor Swift', album: '1989', year: 2014 },
			expectedOutput: ['Taylor Swift', '1989', 2014],
		},
	];

	console.log('\n\x1b[1m   Tests for `getValues` \n\x1b[0m');

	for (const testCase of getValuesTestCases) {
		const { obj, expectedOutput } = testCase;
		const result = getValues(obj);
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			isCorrect = result.every((value) => expectedOutput.includes(value));
		} else {
			isCorrect = result === expectedOutput;
		}
		const base = `called "getValues" with ${print(obj)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

	const getByKeyTestCases = [
		{
			obj: { a: 1, b: 2, c: 3 },
			key: 'a',
			expectedOutput: 1,
		},
		{
			obj: { name: 'John', age: 30, city: 'New York' },
			key: 'age',
			expectedOutput: 30,
		},
		{
			obj: {},
			key: 'a',
			expectedOutput: undefined,
		},
		{
			obj: { brand: 'Apple', os: 'iOS', model: 'iPhone 13', condition: 'used' },
			key: 'os',
			expectedOutput: 'iOS',
		},
		{
			obj: { artist: 'Taylor Swift', album: '1989', year: 2014 },
			key: 'year',
			expectedOutput: 2014,
		},
	];

	console.log('\n\x1b[1m   Tests for `getByKey` \n\x1b[0m');

	for (const testCase of getByKeyTestCases) {
		const { obj, key, expectedOutput } = testCase;
		const result = getByKey(obj, key);
		const isCorrect = result === expectedOutput;
		const base = `called "getByKey" with ${print(obj)} and ${print(key)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}

	const getLengthTestCases = [
		{
			obj: { a: 1, b: 2, c: 3 },
			expectedOutput: 3,
		},
		{
			obj: { name: 'John', age: 30, city: 'New York' },
			expectedOutput: 3,
		},
		{
			obj: {},
			expectedOutput: 0,
		},
		{
			obj: {
				brand: 'Apple',
				os: 'iOS',
				model: 'iPhone 13',
				condition: 'used',
			},
			expectedOutput: 4,
		},
		{
			obj: { artist: 'Taylor Swift', album: '1989', year: 2014 },
			expectedOutput: 3,
		},
	];

	console.log('\n\x1b[1m   Tests for `getLength` \n\x1b[0m');

	for (const testCase of getLengthTestCases) {
		const { obj, expectedOutput } = testCase;
		const result = getLength(obj);
		const isCorrect = result === expectedOutput;
		const base = `called "getLength" with ${print(obj)},`;
		const pass = `✅ ${base} got ${print(result)}`;
		const fail = `❌ ${base} expected ${print(expectedOutput)} but got ${print(result)}`;
		console.log(isCorrect ? pass : fail);
	}
}
runTests();
