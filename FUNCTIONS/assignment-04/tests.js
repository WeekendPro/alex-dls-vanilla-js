import solution from './solution.js';

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

	console.log('\n\x1b[1m   Tests for `getLength` \n\x1b[0m');

	for (const { input, expectedOutput } of getLengthTestCases) {
		const result = getLength(input);
		const isCorrect = result === expectedOutput;
		const base = `called "getLength" with ${input},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expectedOutput} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `getFirstElement` \n\x1b[0m');

	for (const { input, expectedOutput } of getFirstElementTestCases) {
		const result = getFirstElement(input);
		const isCorrect = result === expectedOutput;
		const base = `called "getFirstElement" with ${input},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expectedOutput} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `getLastElement` \n\x1b[0m');

	for (const { input, expectedOutput } of getLastElementTestCases) {
		const result = getLastElement(input);
		const isCorrect = result === expectedOutput;
		const base = `called "getLastElement" with ${input},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expectedOutput} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `addItem` \n\x1b[0m');

	for (const { input, item, expectedOutput } of addItemTestCases) {
		const result = addItem(input, item);
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			isCorrect =
				result.length === expectedOutput.length &&
				expectedOutput.every((value, index) => value === result[index]);
		} else {
			isCorrect = result === expectedOutput;
		}
		const base = `called "addItem" with ${input} and ${item},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expectedOutput} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `removeAndReturnLastItem` \n\x1b[0m');

	for (const { input, expectedOutput } of removeAndReturnLastItemTestCases) {
		const result = removeAndReturnLastItem(input);
		const isCorrect = result === expectedOutput;
		const base = `called "removeAndReturnLastItem" with ${input},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expectedOutput} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `getSum` \n\x1b[0m');

	for (const { input, expectedOutput } of getSumTestCases) {
		const result = getSum(input);
		const isCorrect = result === expectedOutput;
		const base = `called "getSum" with ${input},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expectedOutput} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `getAverage` \n\x1b[0m');

	for (const { input, expectedOutput } of getAverageTestCases) {
		const result = getAverage(input);
		const isCorrect = result === expectedOutput;
		const base = `called "getAverage" with ${input},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expectedOutput} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `getSumFromOneToN` \n\x1b[0m');

	for (const { input, expectedOutput } of getSumFromOneToNTestCases) {
		const result = getSumFromOneToN(input);
		const isCorrect = result === expectedOutput;
		const base = `called "getSumFromOneToN" with ${input},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expectedOutput} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `getNumbersFromOneToN` \n\x1b[0m');

	for (const { input, expectedOutput } of getNumbersFromOneToNTestCases) {
		const result = getNumbersFromOneToN(input);
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			isCorrect =
				result.length === expectedOutput.length &&
				expectedOutput.every((value, index) => value === result[index]);
		} else {
			isCorrect = result === expectedOutput;
		}
		const base = `called "getNumbersFromOneToN" with ${input},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expectedOutput} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `getEvenNumbersFromOneToN` \n\x1b[0m');

	for (const { input, expectedOutput } of getEvenNumbersFromOneToNTestCases) {
		const result = getEvenNumbersFromOneToN(input);
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			isCorrect =
				result.length === expectedOutput.length &&
				expectedOutput.every((value, index) => value === result[index]);
		} else {
			isCorrect = result === expectedOutput;
		}
		const base = `called "getEvenNumbersFromOneToN" with ${input},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expectedOutput} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `getOddNumbersFromOneToN` \n\x1b[0m');

	for (const { input, expectedOutput } of getOddNumbersFromOneToNTestCases) {
		const result = getOddNumbersFromOneToN(input);
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			isCorrect =
				result.length === expectedOutput.length &&
				result.every((value, index) => value === expectedOutput[index]);
		} else {
			isCorrect = result === expectedOutput;
		}
		const base = `called "getOddNumbersFromOneToN" with ${input},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expectedOutput} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `getLargestNumber` \n\x1b[0m');

	for (const { input, expectedOutput } of getLargestNumberTestCases) {
		const result = getLargestNumber(input);
		const isCorrect = result === expectedOutput;
		const base = `called "getLargestNumber" with ${input},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expectedOutput} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

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

	console.log('\n\x1b[1m   Tests for `getSmallestNumber` \n\x1b[0m');

	for (const { input, expectedOutput } of getSmallestNumberTestCases) {
		const result = getSmallestNumber(input);
		const isCorrect = result === expectedOutput;
		const base = `called "getSmallestNumber" with ${input},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expectedOutput} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}
}

runTests();
