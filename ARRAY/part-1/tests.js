import solution from './solution.js';
import { handleTestCases } from '../../shared/utils.js';

function runTests() {
	const {
		getStringLengths,
		incrementNumbers,
		invertBooleans,
		makeNameTag,
		getNumberType,
		extractCityInfo,
		convertToFahrenheit,
		createItemLabels,
		getLargeNumbers,
		findWordsWithE,
		filterByAgeRange,
		removeNullish,
		getUniqueValues,
		getEvenIndexedItems,
		findPalindromes,
		calculateSum,
		calculateProduct,
		joinStrings,
		findMaxNumber,
		findMinNumber,
		countPositiveNumbers,
		summarizeNumbers,
		groupPeopleByCity,
		flattenArrays,
		implementMap,
		implementFilter,
		findLongestString,
		logElements,
		markAsProcessed,
		logWithIndex,
		calculateExternalSum,
	} = solution;

	const getStringLengthsTestCases = [
		{
			input: ['apple', 'banana', 'cherry'],
			expectedOutput: [5, 6, 6],
		},
		{
			input: ['hello', 'world', 'javascript'],
			expectedOutput: [5, 5, 10],
		},
		{
			input: [],
			expectedOutput: [],
		},
		{
			input: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
			expectedOutput: [1, 1, 1, 1, 1, 1, 1],
		},
		{
			input: ['123', '456', '789'],
			expectedOutput: [3, 3, 3],
		},
		{
			input: ['1234567890', '12345678901234567890'],
			expectedOutput: [10, 20],
		},
		{
			input: [
				'jack',
				'jill',
				'jane',
				'john',
				'jeff',
				'jess',
				'jennifer',
				'jacqueline',
				'jasper',
			],
			expectedOutput: [4, 4, 4, 4, 4, 4, 8, 10, 6],
		},
	];

	handleTestCases({
		tests: getStringLengthsTestCases,
		func: getStringLengths,
		params: ['input'],
		forceArrayOrder: true,
	});

	const incrementNumbersTestCases = [
		{
			input: [1, 2, 3, 4, 5],
			expectedOutput: [2, 3, 4, 5, 6],
		},
		{
			input: [0, 0, 0, 0, 0],
			expectedOutput: [1, 1, 1, 1, 1],
		},
		{
			input: [-1, -2, -3, -4, -5],
			expectedOutput: [0, -1, -2, -3, -4],
		},
		{
			input: [100, 200, 300, 400, 500, 600, 700, 800, 900],
			expectedOutput: [101, 201, 301, 401, 501, 601, 701, 801, 901],
		},
	];

	handleTestCases({
		tests: incrementNumbersTestCases,
		func: incrementNumbers,
		params: ['input'],
		forceArrayOrder: true,
	});

	const invertBooleansTestCases = [
		{
			input: [true, false, true, false, true],
			expectedOutput: [false, true, false, true, false],
		},
		{
			input: [true, true, true, true, true],
			expectedOutput: [false, false, false, false, false],
		},
		{
			input: [true],
			expectedOutput: [false],
		},
		{
			input: [false],
			expectedOutput: [true],
		},
	];

	handleTestCases({
		tests: invertBooleansTestCases,
		func: invertBooleans,
		params: ['input'],
		forceArrayOrder: true,
	});

	const makeNameTagTestCases = [
		{
			input: [
				{ name: 'John', city: 'New York' },
				{ name: 'Rachel', city: 'Paris' },
				{ name: 'Maria', city: 'Buffalo' },
			],
			expectedOutput: [
				"I'm John from New York",
				"I'm Rachel from Paris",
				"I'm Maria from Buffalo",
			],
		},
		{
			input: [{ name: 'Max', age: 17, city: 'New Jersey' }],
			expectedOutput: ["I'm Max from New Jersey"],
		},
		{
			input: [],
			expectedOutput: [],
		},
	];

	handleTestCases({
		tests: makeNameTagTestCases,
		func: makeNameTag,
		params: ['input'],
		forceArrayOrder: true,
		multiLineArray: true,
	});

	const getNumberTypeTestCases = [
		{
			input: [1, 2, 3, 4, 5],
			expectedOutput: ['odd', 'even', 'odd', 'even', 'odd'],
		},
		{
			input: [2, 4, 6, 8, 10],
			expectedOutput: ['even', 'even', 'even', 'even', 'even'],
		},
		{
			input: [1, 3, 5, 7, 9],
			expectedOutput: ['odd', 'odd', 'odd', 'odd', 'odd'],
		},
		{
			input: [],
			expectedOutput: [],
		},
	];

	handleTestCases({
		tests: getNumberTypeTestCases,
		func: getNumberType,
		params: ['input'],
		forceArrayOrder: true,
	});

	const extractCityInfoTestCases = [
		{
			input: [
				{ name: 'John', age: 30, address: { country: 'US', city: 'New York' } },
				{ name: 'Rachel', age: 26, address: { country: 'FR', city: 'Paris' } },
				{ name: 'Maria', age: 31, address: { country: 'US', city: 'Buffalo' } },
			],
			expectedOutput: ['New York', 'Paris', 'Buffalo'],
		},
		{
			input: [
				{
					name: 'Barack',
					age: 59,
					address: { country: 'US' },
				},
				{
					name: 'Hillary',
					age: 58,
					address: { country: 'US', city: 'New York' },
				},
			],
			expectedOutput: ['Unknown City', 'New York'],
		},
		{
			input: [],
			expectedOutput: [],
		},
	];

	handleTestCases({
		tests: extractCityInfoTestCases,
		func: extractCityInfo,
		params: ['input'],
		forceArrayOrder: true,
		multiLineArray: true,
	});

	const convertToFahrenheitTestCases = [
		{
			input: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
			expectedOutput: [32, 50, 68, 86, 104, 122, 140, 158, 176, 194, 212],
		},
		{
			input: [-10, -5, 0, 5, 10],
			expectedOutput: [14, 23, 32, 41, 50],
		},
		{
			input: [],
			expectedOutput: [],
		},
		{
			input: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
			expectedOutput: [212, 392, 572, 752, 932, 1112, 1292, 1472, 1652, 1832],
		},
	];

	handleTestCases({
		tests: convertToFahrenheitTestCases,
		func: convertToFahrenheit,
		params: ['input'],
		forceArrayOrder: true,
	});
}
runTests();

// function collapse(text, title = 'Details') {
// 	let isCollapsed = true;
// 	const lines = text.split('\n');

// 	function printOutput() {
// 		console.log(
// 			title + (isCollapsed ? ' (Click to expand)' : ' (Click to collapse)')
// 		);
// 		if (!isCollapsed) {
// 			lines.forEach((line) => console.log(line));
// 		}
// 	}

// 	printOutput();

// 	return function toggleCollapse() {
// 		isCollapsed = !isCollapsed;
// 		// Clear previous output (implementation depends on terminal environment)
// 		console.clear();

// 		printOutput();
// 	};
// }

// // Example usage:
// const myText = `
// This is the first line of text.
// This is the second line of text.
// This is the third line of text.
// `;

// const toggle = collapse(myText, 'My Section');

// // Simulate user interaction (e.g., click)
// toggle(); // Expand
// // Simulate more code execution or user actions...
// toggle(); // Collapse
