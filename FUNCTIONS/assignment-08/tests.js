import solution from './solution.js';
import { Tester } from '../../shared/tester.js';

function runTests() {
	const tester = new Tester();

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
			collection: [1, 2, 2, 3, 4, 4, 5],
			expectedOutput: [1, 2, 3, 4, 5],
		},
		{
			collection: ['apple', 'banana', 'apple', 'cherry', 'banana', 'date'],
			expectedOutput: ['apple', 'banana', 'cherry', 'date'],
		},
		{
			collection: [1, 1, 1, 2, 2, 2, 3, 3, 3],
			expectedOutput: [1, 2, 3],
		},
		{
			collection: [1, 2, 3, 4, 5],
			expectedOutput: [1, 2, 3, 4, 5],
		},
	];

	tester.handleTestCases({
		tests: removeDuplicatesTestCases,
		func: removeDuplicates,
		params: ['collection'],
		forceArrayOrder: true,
		description: `${tester.printFunction(removeDuplicates)} should return a new array with duplicate elements removed.`,
	});

	const mergeArraysTestCases = [
		{
			array1: [1, 2, 3],
			array2: [4, 5, 6],
			expectedOutput: [1, 2, 3, 4, 5, 6],
		},
		{
			array1: [1],
			array2: [2, 3, 4, 5, 6],
			expectedOutput: [1, 2, 3, 4, 5, 6],
		},
		{
			array1: [true, false],
			array2: [false, true],
			expectedOutput: [true, false, false, true],
		},
		{
			array1: ['words', 'have', 'power'],
			array2: ['over', 'us'],
			expectedOutput: ['words', 'have', 'power', 'over', 'us'],
		},
	];

	tester.handleTestCases({
		tests: mergeArraysTestCases,
		func: mergeArrays,
		params: ['array1', 'array2'],
		description: `${tester.printFunction(mergeArrays)} should return a new array with elements from both arrays.`,
	});

	const getIntersectionTestCases = [
		{
			array1: [1, 2, 3, 4, 5],
			array2: [4, 5, 6, 7, 8],
			expectedOutput: [4, 5],
		},
		{
			array1: [1, 2, 3],
			array2: [4, 5, 6],
			expectedOutput: [],
		},
		{
			array1: [true, false],
			array2: [false, true],
			expectedOutput: [false, true],
		},
		{
			array1: ['words', 'have', 'power'],
			array2: ['power', 'of', 'words'],
			expectedOutput: ['power', 'words'],
		},
	];

	tester.handleTestCases({
		tests: getIntersectionTestCases,
		func: getIntersection,
		params: ['array1', 'array2'],
		description: `${tester.printFunction(getIntersection)} should return a new array with elements that appear in both arrays.`,
	});

	const getKeysTestCases = [
		{
			object: { a: 1, b: 2, c: 3 },
			expectedOutput: ['a', 'b', 'c'],
		},
		{
			object: { name: 'John', age: 30, city: 'New York' },
			expectedOutput: ['name', 'age', 'city'],
		},
		{
			object: {},
			expectedOutput: [],
		},
		{
			object: {
				brand: 'Apple',
				os: 'iOS',
				model: 'iPhone 13',
				condition: 'used',
			},
			expectedOutput: ['brand', 'os', 'model', 'condition'],
		},
		{
			object: { artist: 'Taylor Swift', album: '1989', year: 2014 },
			expectedOutput: ['artist', 'album', 'year'],
		},
	];

	tester.handleTestCases({
		tests: getKeysTestCases,
		func: getKeys,
		params: ['object'],
		description: `${tester.printFunction(getKeys)} should return an array of the object's keys.`,
	});

	const getValuesTestCases = [
		{
			object: { a: 1, b: 2, c: 3 },
			expectedOutput: [1, 2, 3],
		},
		{
			object: { name: 'John', age: 30, city: 'New York' },
			expectedOutput: ['John', 30, 'New York'],
		},
		{
			object: {},
			expectedOutput: [],
		},
		{
			object: {
				brand: 'Apple',
				os: 'iOS',
				model: 'iPhone 13',
				condition: 'used',
			},
			expectedOutput: ['Apple', 'iOS', 'iPhone 13', 'used'],
		},
		{
			object: { artist: 'Taylor Swift', album: '1989', year: 2014 },
			expectedOutput: ['Taylor Swift', '1989', 2014],
		},
	];

	tester.handleTestCases({
		tests: getValuesTestCases,
		func: getValues,
		params: ['object'],
		description: `${tester.printFunction(getValues)} should return an array of the object's values.`,
	});

	const getByKeyTestCases = [
		{
			object: { a: 1, b: 2, c: 3 },
			key: 'a',
			expectedOutput: 1,
		},
		{
			object: { name: 'John', age: 30, city: 'New York' },
			key: 'age',
			expectedOutput: 30,
		},
		{
			object: {},
			key: 'a',
			expectedOutput: undefined,
		},
		{
			object: {
				brand: 'Apple',
				os: 'iOS',
				model: 'iPhone 13',
				condition: 'used',
			},
			key: 'os',
			expectedOutput: 'iOS',
		},
		{
			object: { artist: 'Taylor Swift', album: '1989', year: 2014 },
			key: 'year',
			expectedOutput: 2014,
		},
	];

	tester.handleTestCases({
		tests: getByKeyTestCases,
		func: getByKey,
		params: ['object', 'key'],
		description: `${tester.printFunction(getByKey)} should return the value of the object's key.`,
	});

	const getLengthTestCases = [
		{
			object: { a: 1, b: 2, c: 3 },
			expectedOutput: 3,
		},
		{
			object: { name: 'John', age: 30, city: 'New York' },
			expectedOutput: 3,
		},
		{
			object: {},
			expectedOutput: 0,
		},
		{
			object: {
				brand: 'Apple',
				os: 'iOS',
				model: 'iPhone 13',
				condition: 'used',
			},
			expectedOutput: 4,
		},
		{
			object: { artist: 'Taylor Swift', album: '1989', year: 2014 },
			expectedOutput: 3,
		},
	];

	tester.handleTestCases({
		tests: getLengthTestCases,
		func: getLength,
		params: ['object'],
		description: `${tester.printFunction(getLength)} should return the number of key-value pairs in the object.`,
	});

	tester.printTestSuiteResults();
}
runTests();
