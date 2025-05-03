import solution from './solution.js';
import { handleTestCases } from '../../shared/utils.js';

function runTests() {
	const {
		getLength,
		getFirstElement,
		getLastElement,
		addItem,
		removeAndReturnLastItem,
		getSum,
		getAverage,
		getSumFromOneToN,
		getNumbersFromOneToN,
		getEvenNumbersFromOneToN,
		getOddNumbersFromOneToN,
		getLargestNumber,
		getSmallestNumber,
	} = solution;

	const getLengthTestCases = [
		{
			input: [1, 2, 3, 4, 5],
			expectedOutput: 5,
		},
		{
			input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			expectedOutput: 10,
		},
		{
			input: [],
			expectedOutput: 0,
		},
	];

	handleTestCases({
		tests: getLengthTestCases,
		func: getLength,
		params: ['input'],
	});

	const getFirstElementTestCases = [
		{
			input: [1, 2, 3, 4, 5],
			expectedOutput: 1,
		},
		{
			input: [55, 66, 77, 88, 99],
			expectedOutput: 55,
		},
		{
			input: [],
			expectedOutput: undefined,
		},
	];

	handleTestCases({
		tests: getFirstElementTestCases,
		func: getFirstElement,
		params: ['input'],
	});

	const getLastElementTestCases = [
		{
			input: [1, 2, 3, 4, 5],
			expectedOutput: 5,
		},
		{
			input: [55, 66, 77, 88, 99],
			expectedOutput: 99,
		},
		{
			input: [],
			expectedOutput: undefined,
		},
	];

	handleTestCases({
		tests: getLastElementTestCases,
		func: getLastElement,
		params: ['input'],
	});

	const addItemTestCases = [
		{
			input: [1, 2, 3, 4, 5],
			item: 6,
			expectedOutput: [1, 2, 3, 4, 5, 6],
		},
		{
			input: [89, 13, 31, 100, 200],
			item: 1000,
			expectedOutput: [89, 13, 31, 100, 200, 1000],
		},
	];

	handleTestCases({
		tests: addItemTestCases,
		func: addItem,
		params: ['input', 'item'],
	});

	const removeAndReturnLastItemTestCases = [
		{
			input: [1, 2, 3, 4, 5],
			expectedOutput: 5,
		},
		{
			input: [89, 13, 31, 100, 200],
			expectedOutput: 200,
		},
		{
			input: [],
			expectedOutput: undefined,
		},
	];

	handleTestCases({
		tests: removeAndReturnLastItemTestCases,
		func: removeAndReturnLastItem,
		params: ['input'],
	});

	const getSumTestCases = [
		{
			input: [1, 2, 3, 4, 5],
			expectedOutput: 15,
		},
		{
			input: [10, 20, 30, 40, 50],
			expectedOutput: 150,
		},
		{
			input: [],
			expectedOutput: 0,
		},
	];

	handleTestCases({
		tests: getSumTestCases,
		func: getSum,
		params: ['input'],
	});

	const getAverageTestCases = [
		{
			input: [1, 2, 3, 4, 5],
			expectedOutput: 3,
		},
		{
			input: [10, 20, 30, 40, 50],
			expectedOutput: 30,
		},
		{
			input: [940, 191, 192, 193, 194],
			expectedOutput: 342,
		},
	];

	handleTestCases({
		tests: getAverageTestCases,
		func: getAverage,
		params: ['input'],
	});

	const getSumFromOneToNTestCases = [
		{
			input: 5,
			expectedOutput: 15,
		},
		{
			input: 10,
			expectedOutput: 55,
		},
		{
			input: 0,
			expectedOutput: 0,
		},
		{
			input: -1,
			expectedOutput: 0,
		},
		{
			input: 100,
			expectedOutput: 5050,
		},
	];

	handleTestCases({
		tests: getSumFromOneToNTestCases,
		func: getSumFromOneToN,
		params: ['input'],
	});

	const getNumbersFromOneToNTestCases = [
		{
			input: 5,
			expectedOutput: [1, 2, 3, 4, 5],
		},
		{
			input: 10,
			expectedOutput: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			input: 0,
			expectedOutput: [],
		},
		{
			input: -1,
			expectedOutput: [],
		},
	];

	handleTestCases({
		tests: getNumbersFromOneToNTestCases,
		func: getNumbersFromOneToN,
		params: ['input'],
	});

	const getEvenNumbersFromOneToNTestCases = [
		{
			input: 5,
			expectedOutput: [2, 4],
		},
		{
			input: 10,
			expectedOutput: [2, 4, 6, 8, 10],
		},
		{
			input: 0,
			expectedOutput: [],
		},
	];

	handleTestCases({
		tests: getEvenNumbersFromOneToNTestCases,
		func: getEvenNumbersFromOneToN,
		params: ['input'],
	});

	const getOddNumbersFromOneToNTestCases = [
		{
			input: 5,
			expectedOutput: [1, 3, 5],
		},
		{
			input: 10,
			expectedOutput: [1, 3, 5, 7, 9],
		},
		{
			input: 0,
			expectedOutput: [],
		},
	];

	handleTestCases({
		tests: getOddNumbersFromOneToNTestCases,
		func: getOddNumbersFromOneToN,
		params: ['input'],
	});

	const getLargestNumberTestCases = [
		{
			input: [1, 2, 3, 4, 5],
			expectedOutput: 5,
		},
		{
			input: [10, 20, 30, 40, 50],
			expectedOutput: 50,
		},
		{
			input: [100, 700, 200, 450, 50],
			expectedOutput: 700,
		},
	];

	handleTestCases({
		tests: getLargestNumberTestCases,
		func: getLargestNumber,
		params: ['input'],
	});

	const getSmallestNumberTestCases = [
		{
			input: [1, 2, 3, 4, 5],
			expectedOutput: 1,
		},
		{
			input: [10, 20, 30, 40, 50],
			expectedOutput: 10,
		},
		{
			input: [100, 700, 20, 450, 50],
			expectedOutput: 20,
		},
	];

	handleTestCases({
		tests: getSmallestNumberTestCases,
		func: getSmallestNumber,
		params: ['input'],
	});
}

runTests();
