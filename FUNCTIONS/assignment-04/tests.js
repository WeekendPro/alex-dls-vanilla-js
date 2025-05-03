import solution from './solution.js';
import { Tester } from '../../shared/tester.js';

function runTests() {
	const tester = new Tester();

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
			array: [1, 2, 3, 4, 5],
			expectedOutput: 5,
		},
		{
			array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			expectedOutput: 10,
		},
		{
			array: [],
			expectedOutput: 0,
		},
	];

	tester.handleTestCases({
		tests: getLengthTestCases,
		func: getLength,
		params: ['array'],
		description: `${tester.printFunction(getLength)} should return the length of the provided ${tester.printParam('array')}.`,
	});

	const getFirstElementTestCases = [
		{
			array: [1, 2, 3, 4, 5],
			expectedOutput: 1,
		},
		{
			array: [55, 66, 77, 88, 99],
			expectedOutput: 55,
		},
		{
			array: [],
			expectedOutput: undefined,
		},
	];

	tester.handleTestCases({
		tests: getFirstElementTestCases,
		func: getFirstElement,
		params: ['array'],
		description: `${tester.printFunction(getFirstElement)} should return the first element of the provided ${tester.printParam('array')}.`,
	});

	const getLastElementTestCases = [
		{
			array: [1, 2, 3, 4, 5],
			expectedOutput: 5,
		},
		{
			array: [55, 66, 77, 88, 99],
			expectedOutput: 99,
		},
		{
			array: [],
			expectedOutput: undefined,
		},
	];

	tester.handleTestCases({
		tests: getLastElementTestCases,
		func: getLastElement,
		params: ['array'],
		description: `${tester.printFunction(getLastElement)} should return the last element of the provided ${tester.printParam('array')}.`,
	});

	const addItemTestCases = [
		{
			array: [1, 2, 3, 4, 5],
			item: 6,
			expectedOutput: [1, 2, 3, 4, 5, 6],
		},
		{
			array: [89, 13, 31, 100, 200],
			item: 1000,
			expectedOutput: [89, 13, 31, 100, 200, 1000],
		},
	];

	tester.handleTestCases({
		tests: addItemTestCases,
		func: addItem,
		params: ['array', 'item'],
		description: `${tester.printFunction(addItem)} should return a new array with the provided ${tester.printParam('item')} added to the end of the provided ${tester.printParam('array')}.`,
	});

	const removeAndReturnLastItemTestCases = [
		{
			array: [1, 2, 3, 4, 5],
			expectedOutput: 5,
		},
		{
			array: [89, 13, 31, 100, 200],
			expectedOutput: 200,
		},
		{
			array: [],
			expectedOutput: undefined,
		},
	];

	tester.handleTestCases({
		tests: removeAndReturnLastItemTestCases,
		func: removeAndReturnLastItem,
		params: ['array'],
		description: `${tester.printFunction(removeAndReturnLastItem)} should return the last item of the provided ${tester.printParam('array')} and remove it from the array.`,
	});

	const getSumTestCases = [
		{
			array: [1, 2, 3, 4, 5],
			expectedOutput: 15,
		},
		{
			array: [10, 20, 30, 40, 50],
			expectedOutput: 150,
		},
		{
			array: [],
			expectedOutput: 0,
		},
	];

	tester.handleTestCases({
		tests: getSumTestCases,
		func: getSum,
		params: ['array'],
		description: `${tester.printFunction(getSum)} should return the sum of all the elements in the provided ${tester.printParam('array')}.`,
	});

	const getAverageTestCases = [
		{
			array: [1, 2, 3, 4, 5],
			expectedOutput: 3,
		},
		{
			array: [10, 20, 30, 40, 50],
			expectedOutput: 30,
		},
		{
			array: [940, 191, 192, 193, 194],
			expectedOutput: 342,
		},
	];

	tester.handleTestCases({
		tests: getAverageTestCases,
		func: getAverage,
		params: ['array'],
		description: `${tester.printFunction(getAverage)} should return the average of all the elements in the provided ${tester.printParam('array')}.`,
	});

	const getSumFromOneToNTestCases = [
		{
			n: 5,
			expectedOutput: 15,
		},
		{
			n: 10,
			expectedOutput: 55,
		},
		{
			n: 0,
			expectedOutput: 0,
		},
		{
			n: -1,
			expectedOutput: 0,
		},
		{
			n: 100,
			expectedOutput: 5050,
		},
	];

	tester.handleTestCases({
		tests: getSumFromOneToNTestCases,
		func: getSumFromOneToN,
		params: ['n'],
		description: `${tester.printFunction(getSumFromOneToN)} should return the sum of all the numbers from 1 to the provided ${tester.printParam('n')}.`,
	});

	const getNumbersFromOneToNTestCases = [
		{
			n: 5,
			expectedOutput: [1, 2, 3, 4, 5],
		},
		{
			n: 10,
			expectedOutput: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			n: 0,
			expectedOutput: [],
		},
		{
			n: -1,
			expectedOutput: [],
		},
	];

	tester.handleTestCases({
		tests: getNumbersFromOneToNTestCases,
		func: getNumbersFromOneToN,
		params: ['n'],
		description: `${tester.printFunction(getNumbersFromOneToN)} should return an array of all the numbers from 1 to the provided ${tester.printParam('n')}.`,
	});

	const getEvenNumbersFromOneToNTestCases = [
		{
			n: 5,
			expectedOutput: [2, 4],
		},
		{
			n: 10,
			expectedOutput: [2, 4, 6, 8, 10],
		},
		{
			n: 0,
			expectedOutput: [],
		},
	];

	tester.handleTestCases({
		tests: getEvenNumbersFromOneToNTestCases,
		func: getEvenNumbersFromOneToN,
		params: ['n'],
		description: `${tester.printFunction(getEvenNumbersFromOneToN)} should return`,
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

	tester.handleTestCases({
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

	tester.handleTestCases({
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

	tester.handleTestCases({
		tests: getSmallestNumberTestCases,
		func: getSmallestNumber,
		params: ['input'],
	});

	tester.printTestSuiteResults();
}

runTests();
