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
			number1: 1,
			number2: 2,
			expectedOutput: 3,
		},
		{
			number1: 0,
			number2: 0,
			expectedOutput: 0,
		},
		{
			number1: 10,
			number2: 5,
			expectedOutput: 15,
		},
		{
			number1: 33,
			number2: -41,
			expectedOutput: -8,
		},
		{
			number1: -6,
			number2: 810,
			expectedOutput: 804,
		},
		{
			number1: 99999,
			number2: 1,
			expectedOutput: 100000,
		},
	];

	tester.handleTestCases({
		tests: sumTestCases,
		func: getSum,
		params: ['number1', 'number2'],
		description: `${tester.printFunction(getSum)} should return the sum of the provided ${tester.printParam('number1')} and ${tester.printParam('number2')}.`,
	});

	const differenceTestCases = [
		{
			number1: 1,
			number2: 2,
			expectedOutput: -1,
		},
		{
			number1: 0,
			number2: 0,
			expectedOutput: 0,
		},
		{
			number1: 10,
			number2: 5,
			expectedOutput: 5,
		},
		{
			number1: 33,
			number2: -41,
			expectedOutput: 74,
		},
		{
			number1: -6,
			number2: 810,
			expectedOutput: -816,
		},
		{
			number1: 99999,
			number2: 1,
			expectedOutput: 99998,
		},
	];

	tester.handleTestCases({
		tests: differenceTestCases,
		func: getDifference,
		params: ['number1', 'number2'],
		description: `${tester.printFunction(getDifference)} should return the difference of the provided ${tester.printParam('number1')} and ${tester.printParam('number2')}.`,
	});

	const productTestCases = [
		{
			number1: 1,
			number2: 2,
			expectedOutput: 2,
		},
		{
			number1: 0,
			number2: 0,
			expectedOutput: 0,
		},
		{
			number1: 10,
			number2: 5,
			expectedOutput: 50,
		},
		{
			number1: 33,
			number2: 5.5,
			expectedOutput: 181.5,
		},
		{
			number1: -6,
			number2: 200,
			expectedOutput: -1200,
		},
		{
			number1: 99999,
			number2: 1,
			expectedOutput: 99999,
		},
	];

	tester.handleTestCases({
		tests: productTestCases,
		func: getProduct,
		params: ['number1', 'number2'],
		description: `${tester.printFunction(getProduct)} should return the product of the provided ${tester.printParam('number1')} and ${tester.printParam('number2')}.`,
	});

	const quotientTestCases = [
		{
			number1: 1,
			number2: 2,
			expectedOutput: 0.5,
		},
		{
			number1: 10,
			number2: 5,
			expectedOutput: 2,
		},
		{
			number1: 33,
			number2: 5.5,
			expectedOutput: 6,
		},
		{
			number1: 750,
			number2: 100,
			expectedOutput: 7.5,
		},
		{
			number1: 99999,
			number2: 1,
			expectedOutput: 99999,
		},
	];

	tester.handleTestCases({
		tests: quotientTestCases,
		func: getQuotient,
		params: ['number1', 'number2'],
		description: `${tester.printFunction(getQuotient)} should return the quotient of the provided ${tester.printParam('number1')} and ${tester.printParam('number2')}.`,
	});

	const remainderTestCases = [
		{
			number1: 1,
			number2: 2,
			expectedOutput: 1,
		},
		{
			number1: 10,
			number2: 5,
			expectedOutput: 0,
		},
		{
			number1: 33,
			number2: 5,
			expectedOutput: 3,
		},
		{
			number1: 750,
			number2: 100,
			expectedOutput: 50,
		},
		{
			number1: 99999,
			number2: 1,
			expectedOutput: 0,
		},
	];

	tester.handleTestCases({
		tests: remainderTestCases,
		func: getRemainder,
		params: ['number1', 'number2'],
		description: `${tester.printFunction(getRemainder)} should return the remainder of the provided ${tester.printParam('number1')} and ${tester.printParam('number2')}.`,
	});

	const powerTestCases = [
		{
			number1: 1,
			number2: 2,
			expectedOutput: 1,
		},
		{
			number1: 12,
			number2: 3,
			expectedOutput: 1728,
		},
		{
			number1: 3,
			number2: 5,
			expectedOutput: 243,
		},
		{
			number1: 750,
			number2: 2,
			expectedOutput: 562500,
		},
		{
			number1: 10,
			number2: 5,
			expectedOutput: 100000,
		},
		{
			number1: 99999,
			number2: 1,
			expectedOutput: 99999,
		},
	];

	tester.handleTestCases({
		tests: powerTestCases,
		func: getPower,
		params: ['number1', 'number2'],
		description: `${tester.printFunction(getPower)} should return the power of the provided ${tester.printParam('number1')} and ${tester.printParam('number2')}.`,
	});

	tester.printTestSuiteResults();
}

runTests();
