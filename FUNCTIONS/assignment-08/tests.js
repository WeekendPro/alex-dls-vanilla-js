import solution from './solution.js';
import { handleTestCases } from '../../shared/utils.js';

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

	handleTestCases({
		tests: removeDuplicatesTestCases,
		func: removeDuplicates,
		params: ['input'],
		forceArrayOrder: true,
	});

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

	handleTestCases({
		tests: mergeArraysTestCases,
		func: mergeArrays,
		params: ['arr1', 'arr2'],
		forceArrayOrder: true,
	});

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

	handleTestCases({
		tests: getIntersectionTestCases,
		func: getIntersection,
		params: ['arr1', 'arr2'],
	});

	const getKeysTestCases = [
		{
			input: { a: 1, b: 2, c: 3 },
			expectedOutput: ['a', 'b', 'c'],
		},
		{
			input: { name: 'John', age: 30, city: 'New York' },
			expectedOutput: ['name', 'age', 'city'],
		},
		{
			input: {},
			expectedOutput: [],
		},
		{
			input: {
				brand: 'Apple',
				os: 'iOS',
				model: 'iPhone 13',
				condition: 'used',
			},
			expectedOutput: ['brand', 'os', 'model', 'condition'],
		},
		{
			input: { artist: 'Taylor Swift', album: '1989', year: 2014 },
			expectedOutput: ['artist', 'album', 'year'],
		},
	];

	handleTestCases({
		tests: getKeysTestCases,
		func: getKeys,
		params: ['input'],
	});

	const getValuesTestCases = [
		{
			input: { a: 1, b: 2, c: 3 },
			expectedOutput: [1, 2, 3],
		},
		{
			input: { name: 'John', age: 30, city: 'New York' },
			expectedOutput: ['John', 30, 'New York'],
		},
		{
			input: {},
			expectedOutput: [],
		},
		{
			input: {
				brand: 'Apple',
				os: 'iOS',
				model: 'iPhone 13',
				condition: 'used',
			},
			expectedOutput: ['Apple', 'iOS', 'iPhone 13', 'used'],
		},
		{
			input: { artist: 'Taylor Swift', album: '1989', year: 2014 },
			expectedOutput: ['Taylor Swift', '1989', 2014],
		},
	];

	handleTestCases({
		tests: getValuesTestCases,
		func: getValues,
		params: ['input'],
	});

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

	handleTestCases({
		tests: getByKeyTestCases,
		func: getByKey,
		params: ['obj', 'key'],
	});

	const getLengthTestCases = [
		{
			input: { a: 1, b: 2, c: 3 },
			expectedOutput: 3,
		},
		{
			input: { name: 'John', age: 30, city: 'New York' },
			expectedOutput: 3,
		},
		{
			input: {},
			expectedOutput: 0,
		},
		{
			input: {
				brand: 'Apple',
				os: 'iOS',
				model: 'iPhone 13',
				condition: 'used',
			},
			expectedOutput: 4,
		},
		{
			input: { artist: 'Taylor Swift', album: '1989', year: 2014 },
			expectedOutput: 3,
		},
	];

	handleTestCases({
		tests: getLengthTestCases,
		func: getLength,
		params: ['input'],
	});
}
runTests();
