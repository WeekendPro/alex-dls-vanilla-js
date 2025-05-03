import solution from './solution.js';
import { Tester } from '../../shared/tester.js';

function runTests() {
	const tester = new Tester();

	const {
		getSum = () => {},
		getDifference = () => {},
		getProduct = () => {},
		getQuotient = () => {},
		getRemainder = () => {},
		getPower = () => {},
	} = solution;

	const sumTestCases = [
		{
			a: 1,
			b: 2,
			expectedOutput: 3,
		},
		{
			a: 0,
			b: 0,
			expectedOutput: 0,
		},
		{
			a: 10,
			b: 5,
			expectedOutput: 15,
		},
		{
			a: 33,
			b: -41,
			expectedOutput: -8,
		},
		{
			a: -6,
			b: 810,
			expectedOutput: 804,
		},
		{
			a: 99999,
			b: 1,
			expectedOutput: 100000,
		},
	];

	tester.handleTestCases({
		tests: sumTestCases,
		func: getSum,
		params: ['a', 'b'],
	});

	const differenceTestCases = [
		{
			a: 1,
			b: 2,
			expectedOutput: -1,
		},
		{
			a: 0,
			b: 0,
			expectedOutput: 0,
		},
		{
			a: 10,
			b: 5,
			expectedOutput: 5,
		},
		{
			a: 33,
			b: -41,
			expectedOutput: 74,
		},
		{
			a: -6,
			b: 810,
			expectedOutput: -816,
		},
		{
			a: 99999,
			b: 1,
			expectedOutput: 99998,
		},
	];

	tester.handleTestCases({
		tests: differenceTestCases,
		func: getDifference,
		params: ['a', 'b'],
	});

	const productTestCases = [
		{
			a: 1,
			b: 2,
			expectedOutput: 2,
		},
		{
			a: 0,
			b: 0,
			expectedOutput: 0,
		},
		{
			a: 10,
			b: 5,
			expectedOutput: 50,
		},
		{
			a: 33,
			b: 5.5,
			expectedOutput: 181.5,
		},
		{
			a: -6,
			b: 200,
			expectedOutput: -1200,
		},
		{
			a: 99999,
			b: 1,
			expectedOutput: 99999,
		},
	];

	tester.handleTestCases({
		tests: productTestCases,
		func: getProduct,
		params: ['a', 'b'],
	});

	const quotientTestCases = [
		{
			a: 1,
			b: 2,
			expectedOutput: 0.5,
		},
		{
			a: 10,
			b: 5,
			expectedOutput: 2,
		},
		{
			a: 33,
			b: 5.5,
			expectedOutput: 6,
		},
		{
			a: 750,
			b: 100,
			expectedOutput: 7.5,
		},
		{
			a: 99999,
			b: 1,
			expectedOutput: 99999,
		},
	];

	tester.handleTestCases({
		tests: quotientTestCases,
		func: getQuotient,
		params: ['a', 'b'],
	});

	const remainderTestCases = [
		{
			a: 1,
			b: 2,
			expectedOutput: 1,
		},
		{
			a: 10,
			b: 5,
			expectedOutput: 0,
		},
		{
			a: 33,
			b: 5,
			expectedOutput: 3,
		},
		{
			a: 750,
			b: 100,
			expectedOutput: 50,
		},
		{
			a: 99999,
			b: 1,
			expectedOutput: 0,
		},
	];

	tester.handleTestCases({
		tests: remainderTestCases,
		func: getRemainder,
		params: ['a', 'b'],
	});

	const powerTestCases = [
		{
			a: 1,
			b: 2,
			expectedOutput: 1,
		},
		{
			a: 12,
			b: 3,
			expectedOutput: 1728,
		},
		{
			a: 3,
			b: 5,
			expectedOutput: 243,
		},
		{
			a: 750,
			b: 2,
			expectedOutput: 562500,
		},
		{
			a: 10,
			b: 5,
			expectedOutput: 100000,
		},
		{
			a: 99999,
			b: 1,
			expectedOutput: 99999,
		},
	];

	tester.handleTestCases({
		tests: powerTestCases,
		func: getPower,
		params: ['a', 'b'],
	});

	tester.printTestSuiteResults();
}

runTests();
